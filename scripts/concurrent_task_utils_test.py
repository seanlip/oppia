# coding: utf-8
#
# Copyright 2020 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Unit tests for scripts/concurrent_task_utils.py."""

from __future__ import annotations

import builtins
import threading
import time

from core.tests import test_utils

from scripts import concurrent_task_utils

from typing import Callable, List


def test_function(unused_arg: str) -> Callable[[], None]:
    def task_func() -> None:
        pass
    return task_func


class ConcurrentTaskUtilsTests(test_utils.GenericTestBase):
    """Test for concurrent_task_utils.py flie."""

    def setUp(self) -> None:
        super().setUp()
        self.semaphore = threading.Semaphore(1)
        self.task_stdout: List[str] = []

        def mock_print(*args: str) -> None:
            """Mock for print. Append the values to print to
            task_stdout list.

            Args:
                *args: list(*). Variable length argument list of values to print
                    in the same line of output.
            """
            self.task_stdout.append(' '.join(str(arg) for arg in args))
        self.print_swap = self.swap(builtins, 'print', mock_print)


class TaskResultTests(ConcurrentTaskUtilsTests):
    """Tests for TaskResult class."""

    def test_all_messages_with_success_message(self) -> None:
        output_object = concurrent_task_utils.TaskResult(
            'Test', False, [], [])
        self.assertEqual(output_object.trimmed_messages, [])
        self.assertEqual(
            output_object.get_report(), ['SUCCESS  Test check passed'])
        self.assertFalse(output_object.failed)
        self.assertEqual(output_object.name, 'Test')

    def test_all_messages_with_failed_message(self) -> None:
        output_object = concurrent_task_utils.TaskResult(
            'Test', True, [], [])
        self.assertEqual(output_object.trimmed_messages, [])
        self.assertEqual(
            output_object.get_report(), ['FAILED  Test check failed'])
        self.assertTrue(output_object.failed)
        self.assertEqual(output_object.name, 'Test')


class CreateTaskTests(ConcurrentTaskUtilsTests):
    """Tests for create_task method."""

    def test_create_task_with_success(self) -> None:
        task = concurrent_task_utils.create_task(
            test_function, True, self.semaphore)
        self.assertTrue(isinstance(task, concurrent_task_utils.TaskThread))


class TaskThreadTests(ConcurrentTaskUtilsTests):
    """Tests for TaskThread class."""

    def test_task_thread_with_success(self) -> None:
        task = concurrent_task_utils.TaskThread(
            test_function('unused_arg'), False, self.semaphore, name='test',
            report_enabled=True)
        self.semaphore.acquire()
        task.start_time = time.time()
        with self.print_swap:
            task.start()
            task.join()
        expected_output = [s for s in self.task_stdout if 'FINISHED' in s]
        self.assertTrue(len(expected_output) == 1)

    def test_task_thread_with_exception(self) -> None:
        task = concurrent_task_utils.TaskThread(
            test_function, True, self.semaphore, name='test',
            report_enabled=True)
        self.semaphore.acquire()
        task.start_time = time.time()
        with self.print_swap:
            task.start()
            task.join()
        self.assertIn(
            'test_function() missing 1 required '
            'positional argument: \'unused_arg\'',
            self.task_stdout
        )

    def test_task_thread_with_verbose_mode_enabled(self) -> None:
        class HelperTests:
            def test_show(self) -> concurrent_task_utils.TaskResult:
                return concurrent_task_utils.TaskResult('name', True, [], [])
            def test_perform_all_check(
                self
            ) -> List[concurrent_task_utils.TaskResult]:
                return [self.test_show()]

        def test_func() -> HelperTests:
            return HelperTests()

        task = concurrent_task_utils.TaskThread(
            test_func().test_perform_all_check, True,
            self.semaphore, name='test', report_enabled=True)
        self.semaphore.acquire()
        task.start_time = time.time()
        with self.print_swap:
            task.start()
            task.join()
        self.assertRegex(
            self.task_stdout[0],
            r'\d+:\d+:\d+ Report from name check\n-+\nFAILED  '
            'name check failed')

    def test_task_thread_with_task_report_disabled(self) -> None:
        class HelperTests:
            def test_show(self) -> concurrent_task_utils.TaskResult:
                return concurrent_task_utils.TaskResult(
                    '', False, [], ['msg'])
            def test_perform_all_check(
                self
            ) -> List[concurrent_task_utils.TaskResult]:
                return [self.test_show()]

        def test_func() -> HelperTests:
            return HelperTests()

        task = concurrent_task_utils.TaskThread(
            test_func().test_perform_all_check, True,
            self.semaphore, name='test', report_enabled=False)
        self.semaphore.acquire()
        task.start_time = time.time()
        with self.print_swap:
            task.start()
            task.join()
        expected_output = [s for s in self.task_stdout if 'FINISHED' in s]
        self.assertTrue(len(expected_output) == 1)


class ExecuteTasksTests(ConcurrentTaskUtilsTests):
    """Tests for execute_tasks method."""

    def test_execute_task_with_single_task(self) -> None:
        task = concurrent_task_utils.create_task(
            test_function('unused_arg'), False, self.semaphore, name='test')
        with self.print_swap:
            concurrent_task_utils.execute_tasks([task], self.semaphore)
        expected_output = [s for s in self.task_stdout if 'FINISHED' in s]
        self.assertTrue(len(expected_output) == 1)

    def test_execute_task_with_multiple_task(self) -> None:
        task_list = []
        for _ in range(6):
            task = concurrent_task_utils.create_task(
                test_function('unused_arg'), False, self.semaphore)
            task_list.append(task)
        with self.print_swap:
            concurrent_task_utils.execute_tasks(task_list, self.semaphore)
        expected_output = [s for s in self.task_stdout if 'FINISHED' in s]
        self.assertTrue(len(expected_output) == 6)

    def test_execute_task_with_exception(self) -> None:
        task_list = []
        for _ in range(6):
            task = concurrent_task_utils.create_task(
                test_function, True, self.semaphore)
            task_list.append(task)
        with self.print_swap:
            concurrent_task_utils.execute_tasks(task_list, self.semaphore)
        self.assertIn(
            'test_function() missing 1 required '
            'positional argument: \'unused_arg\'',
            self.task_stdout
        )

class TaskRetryBehaviorTests(test_utils.GenericTestBase):
    '''Tests for retry behaviors in create_task method.'''

    def test_create_task_with_retryable_errors(self) -> None:
        '''Test for create_task method with retryable errors.'''
        call_count = 0

        def mock_func():
            nonlocal call_count
            call_count += 1
            if call_count == 1:
                raise Exception('Error -11')
            return [concurrent_task_utils.TaskResult(
                name='mock_task', failed=False, trimmed_messages=[], messages=['Success'])]

        test_target = 'retryable_task'
        semaphore = threading.Semaphore(1)

        task = concurrent_task_utils.create_task(
            func=mock_func,
            verbose=True,
            semaphore=semaphore,
            name=test_target,
            report_enabled=False,
            errors_to_retry_on=['Error -11']
        )

        task.run()

        self.assertEqual(task.num_attempts, 2)
        self.assertTrue(task.finished)
        self.assertIsNone(task.exception)
        self.assertEqual(call_count, 2)
        self.assertEqual(task.task_results[0].messages[0], 'Success')

    def test_create_task_with_non_retryable_errors(self) -> None:
        '''Test for create_task method with non-retryable errors.'''

        def mock_func():
            raise Exception('Non-retryable error')

        test_target = 'non_retryable_task'
        semaphore = threading.Semaphore(1)

        task = concurrent_task_utils.create_task(
            func=mock_func,
            verbose=True,
            semaphore=semaphore,
            name=test_target,
            report_enabled=False,
            errors_to_retry_on=['Error -11']
        )

        task.run()

        self.assertEqual(task.num_attempts, 1)
        self.assertTrue(task.finished)
        self.assertIsNotNone(task.exception)
        self.assertEqual(str(task.exception), 'Non-retryable error')

    def test_create_task_with_bad_string_error(self) -> None:
        '''Test for create_task method when a bad string error is encountered.'''

        def mock_func(target: str):
            if 'bad_string' in target:
                raise ValueError('Bad string encountered')
            return [concurrent_task_utils.TaskResult(
                name=target, failed=False, trimmed_messages=[], messages=['Processed successfully'])]

        semaphore = threading.Semaphore(1)

        bad_task = concurrent_task_utils.create_task(
            func=lambda: mock_func('bad_string_target'),
            verbose=True,
            semaphore=semaphore,
            name='bad_task',
            report_enabled=False,
            errors_to_retry_on=['ValueError']
        )

        bad_task.run()

        self.assertEqual(bad_task.num_attempts, 1)
        self.assertTrue(bad_task.finished)
        self.assertIsNotNone(bad_task.exception)
        self.assertEqual(str(bad_task.exception), 'Bad string encountered')

        valid_task = concurrent_task_utils.create_task(
            func=lambda: mock_func('valid_target'),
            verbose=True,
            semaphore=semaphore,
            name='valid_task',
            report_enabled=False,
            errors_to_retry_on=['ValueError']
        )

        valid_task.run()

        self.assertEqual(valid_task.num_attempts, 1)
        self.assertTrue(valid_task.finished)
        self.assertIsNone(valid_task.exception)
        self.assertEqual(valid_task.task_results[0].messages[0], 'Processed successfully')
