# coding: utf-8
#
# Copyright 2019 The Oppia Authors. All Rights Reserved.
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

"""Unit tests for scripts/install_third_party_libs.py."""

from __future__ import annotations

import builtins
import collections
import os
import shutil
import subprocess
import tempfile

from core import feconf
from core.tests import test_utils

from typing import Final, List, Tuple

from . import clean
from . import common
from . import install_dependencies_json_packages
from . import install_python_prod_dependencies
from . import install_third_party_libs
from . import pre_commit_hook
from . import pre_push_hook

RELEASE_TEST_DIR: Final = os.path.join('core', 'tests', 'release_sources', '')
MOCK_TMP_UNZIP_PATH: Final = os.path.join(RELEASE_TEST_DIR, 'tmp_unzip.zip')
MOCK_TMP_UNTAR_PATH: Final = os.path.join(RELEASE_TEST_DIR, 'tmp_unzip.tar.gz')
TEST_DATA_DIR: Final = os.path.join('core', 'tests', 'data', '')
MOCK_YARN_PATH: Final = os.path.join(
    TEST_DATA_DIR, 'yarn-v%s' % common.YARN_VERSION
)


class MockCD:
    """Mock for context manager for changing the current working directory."""

    def __init__(self, unused_new_path: str) -> None:
        pass

    def __enter__(self) -> None:
        pass

    def __exit__(
        self, unused_arg1: str, unused_arg2: str, unused_arg3: str
    ) -> None:
        pass


class Ret:
    """Return object with required attributes."""

    def __init__(
           self, returncode: int = 0,
           communicate_val: Tuple[bytes, bytes] = (b'', b'')
        ) -> None:
        self.returncode = returncode
        self.communicate_val = communicate_val

    def communicate(self) -> Tuple[bytes, bytes]:
        """Return required method."""
        return self.communicate_val


class InstallThirdPartyLibsTests(test_utils.GenericTestBase):
    """Test the methods for installing third party libs."""

    def setUp(self) -> None:
        super().setUp()

        self.check_function_calls = {
            'check_call_is_called': False,
        }
        self.print_arr: List[str] = []

        def mock_check_call(
            unused_cmd_tokens: List[str],
            **_kwargs: str
        ) -> Ret:
            self.check_function_calls['check_call_is_called'] = True
            return Ret(0, (b'', b''))

        def mock_check_call_error(*args: str) -> None:
            """Raise the Exception resulting from a failed check_call()"""
            self.check_function_calls['check_call_is_called'] = True
            raise subprocess.CalledProcessError(-1, args[0])

        def mock_popen_error_call(
            unused_cmd_tokens: List[str],
            *_args: str,
            **_kwargs: str
        ) -> Ret:
            return Ret(1, (b'', b'can\'t combine user with prefix'))

        def mock_print(msg: str) -> None:
            self.print_arr.append(msg)

        self.check_call_swap = self.swap(
            subprocess, 'check_call', mock_check_call)
        self.Popen_swap = self.swap(
            subprocess, 'Popen', mock_check_call)
        self.check_call_error_swap = self.swap(
            subprocess, 'check_call', mock_check_call_error)
        self.Popen_error_swap = self.swap(
            subprocess, 'Popen', mock_popen_error_call)
        self.print_swap = self.swap(builtins, 'print', mock_print)

        def mock_ensure_directory_exists(unused_path: str) -> None:
            pass

        self.dir_exists_swap = self.swap(
            common, 'ensure_directory_exists', mock_ensure_directory_exists)

    def test_install_third_party_main_under_docker(self) -> None:
        with self.swap(feconf, 'OPPIA_IS_DOCKERIZED', True):
            with self.check_call_swap:
                install_third_party_libs.main()

    def test_install_third_party_main_also_installs_hooks(self) -> None:
        check_function_calls = {
            'pre_commit_hook_main_is_called': False,
            'pre_push_hook_main_is_called': False,
        }
        expected_check_function_calls = {
            'pre_commit_hook_main_is_called': True,
            'pre_push_hook_main_is_called': True,
        }

        def mock_install_gcloud_sdk() -> None:
            pass
        def mock_install_redis_cli() -> None:
            pass
        def mock_install_elasticsearch_dev_server() -> None:
            pass
        def mock_external_script_call() -> None:
            pass
        def mock_mkdir(unused_path: str) -> None:
            pass
        def mock_copytree(unused_src: str, unused_dst: str) -> None:
            pass
        def mock_main_for_pre_commit_hook(args: List[str]) -> None:  # pylint: disable=unused-argument
            check_function_calls['pre_commit_hook_main_is_called'] = True
        def mock_main_for_pre_push_hook(args: List[str]) -> None:  # pylint: disable=unused-argument
            check_function_calls['pre_push_hook_main_is_called'] = True
        def mock_isdir(path: str) -> bool:
            correct_google_path = os.path.join(
                common.THIRD_PARTY_PYTHON_LIBS_DIR, 'google')
            directories_that_do_not_exist = {
                os.path.join(correct_google_path, 'appengine'),
                os.path.join(correct_google_path, 'pyglib'),
                correct_google_path
            }
            if path in directories_that_do_not_exist:
                return False
            return True

        swap_install_gcloud_sdk = self.swap(
            install_third_party_libs, 'install_gcloud_sdk',
            mock_install_gcloud_sdk)
        swap_install_redis_cli = self.swap(
            install_third_party_libs, 'install_redis_cli',
            mock_install_redis_cli)
        swap_install_elasticsearch_dev_server = self.swap(
            install_third_party_libs, 'install_elasticsearch_dev_server',
            mock_install_elasticsearch_dev_server)
        swap_install_python_prod_main = self.swap(
            install_python_prod_dependencies, 'main',
            mock_external_script_call)
        swap_install_json_deps_main = self.swap(
            install_dependencies_json_packages, 'main',
            mock_external_script_call)
        swap_isdir = self.swap(os.path, 'isdir', mock_isdir)
        swap_mkdir = self.swap(os, 'mkdir', mock_mkdir)
        swap_copytree = self.swap(shutil, 'copytree', mock_copytree)
        pre_commit_hook_main_swap = self.swap(
            pre_commit_hook, 'main', mock_main_for_pre_commit_hook)
        pre_push_hook_main_swap = self.swap(
            pre_push_hook, 'main', mock_main_for_pre_push_hook)

        with self.swap(feconf, 'OPPIA_IS_DOCKERIZED', False):
            with self.check_call_swap, self.Popen_swap, swap_install_redis_cli:
                with swap_install_gcloud_sdk, swap_install_python_prod_main:
                    with pre_commit_hook_main_swap, pre_push_hook_main_swap:
                        with swap_isdir, swap_mkdir, swap_copytree:
                            with swap_install_elasticsearch_dev_server:
                                with swap_install_json_deps_main:
                                    install_third_party_libs.main()

        self.assertEqual(check_function_calls, expected_check_function_calls)

    def test_clean_pyc_files_removes_pyc_files(self) -> None:
        check_file_removals = {
            'root/file1.js': False,
            'root/file2.pyc': False
        }
        expected_check_file_removals = {
            'root/file1.js': False,
            'root/file2.pyc': True
        }
        def mock_walk(
            unused_path: str
        ) -> List[Tuple[str, List[str], List[str]]]:
            return [('root', ['dir1'], ['file1.js', 'file2.pyc'])]
        def mock_remove(path: str) -> None:
            check_file_removals[path] = True
        def mock_exists(unused_path: str) -> bool:
            return True

        walk_swap = self.swap(os, 'walk', mock_walk)
        remove_swap = self.swap(os, 'remove', mock_remove)
        exists_swap = self.swap(os.path, 'exists', mock_exists)
        with walk_swap, remove_swap, exists_swap:
            install_third_party_libs.clean_pyc_files()
        self.assertEqual(check_file_removals, expected_check_file_removals)


class InstallRedisAndElasticSearchTests(test_utils.GenericTestBase):
    """Test the methods for installing Redis and Elasticsearch."""

    def test_install_redis_cli_function_calls(self) -> None:
        check_function_calls = {
            'subprocess_call_is_called': False,
            'download_and_untar_files_is_called': False
        }
        expected_check_function_calls = {
            'subprocess_call_is_called': True,
            'download_and_untar_files_is_called': True
        }
        def mock_download_and_untar_files(
            unused_source_url: str,
            unused_target_parent_dir: str,
            unused_tar_root_name: str,
            unused_target_root_name: str
        ) -> None:
            check_function_calls['download_and_untar_files_is_called'] = True

        def mock_call(unused_cmd_tokens: List[str], **kwargs: str) -> Ret:  # pylint: disable=unused-argument
            check_function_calls['subprocess_call_is_called'] = True

            # The first subprocess.call() in install_redis_cli needs to throw an
            # exception so that the script can execute the installation pathway.
            if unused_cmd_tokens == [common.REDIS_SERVER_PATH, '--version']:
                raise OSError('redis-server: command not found')

            return Ret()

        swap_call = self.swap(subprocess, 'call', mock_call)
        untar_files_swap = self.swap(
            install_third_party_libs, 'download_and_untar_files',
            mock_download_and_untar_files)
        with swap_call, untar_files_swap:
            install_third_party_libs.install_redis_cli()

        self.assertEqual(check_function_calls, expected_check_function_calls)

    def test_install_elasticsearch_dev_server_unix(self) -> None:
        check_function_calls = {
            'subprocess_call_is_called': False,
            'download_and_untar_files_is_called': False,
            'download_and_unzip_files_is_called': False
        }
        def mock_is_linux_os() -> bool:
            return False
        def mock_is_mac_os() -> bool:
            return True
        def mock_download_and_untar_files(
            unused_source_url: str,
            unused_target_parent_dir: str,
            unused_tar_root_name: str,
            unused_target_root_name: str
        ) -> None:
            check_function_calls['download_and_untar_files_is_called'] = True

        def mock_call(
            unused_cmd_tokens: List[str],
            *_args: str,
            **_kwargs: str
        ) -> Ret:
            check_function_calls['subprocess_call_is_called'] = True
            # The first subprocess.call() needs to throw an
            # exception so that the script can execute the installation pathway.
            if unused_cmd_tokens == [
                    '%s/bin/elasticsearch' % common.ES_PATH, '--version']:
                raise OSError('elasticsearch: command not found')

            return Ret()

        swap_call = self.swap(subprocess, 'call', mock_call)
        untar_files_swap = self.swap(
            install_third_party_libs, 'download_and_untar_files',
            mock_download_and_untar_files)

        expected_check_function_calls = {
            'subprocess_call_is_called': True,
            'download_and_untar_files_is_called': True,
            'download_and_unzip_files_is_called': False
        }

        mac_os_swap = self.swap(common, 'is_mac_os', mock_is_mac_os)
        linux_os_swap = self.swap(common, 'is_linux_os', mock_is_linux_os)
        with swap_call, untar_files_swap, mac_os_swap, linux_os_swap:
            install_third_party_libs.install_elasticsearch_dev_server()
        self.assertEqual(check_function_calls, expected_check_function_calls)

    def test_install_elasticsearch_unrecognized_os(self) -> None:

        def mock_is_mac_os() -> bool:
            return False
        def mock_is_linux_os() -> bool:
            return False

        def mock_call(
            unused_cmd_tokens: List[str],
            *_args: str,
            **_kwargs: str
        ) -> Ret:
            # The first subprocess.call() needs to throw an
            # exception so that the script can execute the installation pathway.
            if unused_cmd_tokens == [
                    '%s/bin/elasticsearch' % common.ES_PATH, '--version']:
                raise OSError('elasticsearch: command not found')

            return Ret()

        swap_call = self.swap(subprocess, 'call', mock_call)
        mac_swap = self.swap(common, 'is_mac_os', mock_is_mac_os)
        linux_swap = self.swap(common, 'is_linux_os', mock_is_linux_os)
        os_not_supported_exception = self.assertRaisesRegex(
            Exception, 'Unrecognized or unsupported operating system.')
        with mac_swap, linux_swap, swap_call, (
            os_not_supported_exception):
            install_third_party_libs.install_elasticsearch_dev_server()

    def test_elasticsearch_already_installed(self) -> None:
        check_function_calls = {
            'subprocess_call_is_called': False,
            'download_and_untar_files_is_called': False,
            'download_and_unzip_files_is_called': False
        }

        def mock_call(
            unused_cmd_tokens: List[str],
            *_args: str,
            **_kwargs: str
        ) -> Ret:
            check_function_calls['subprocess_call_is_called'] = True

            return Ret()

        swap_call = self.swap(subprocess, 'call', mock_call)
        expected_check_function_calls = {
            'subprocess_call_is_called': True,
            'download_and_untar_files_is_called': False,
            'download_and_unzip_files_is_called': False
        }

        with swap_call:
            install_third_party_libs.install_elasticsearch_dev_server()
        self.assertEqual(check_function_calls, expected_check_function_calls)

    def test_function_calls(self) -> None:
        check_function_calls = {
            'install_third_party_main_is_called': False,
            'setup_main_is_called': False,
            'setup_gae_main_is_called': False,
            'pre_commit_hook_main_is_called': False,
            'pre_push_hook_main_is_called': False,
            'tweak_yarn_executable_is_called': False
        }
        self.expected_check_function_calls = {
            'remove_is_called': True,
            'makedirs_is_called': True,
            'url_retrieve_is_called': True
        }
        self.raise_error = False
        def mock_remove(unused_path: str) -> None:
            self.check_function_calls['remove_is_called'] = True
        def mock_makedirs(unused_path: str, exist_ok: bool = False) -> None:  # pylint: disable=unused-argument
            self.check_function_calls['makedirs_is_called'] = True
        self.print_arr: List[str] = []
        def mock_print(msg: str) -> None:
            self.print_arr.append(msg)
        def mock_url_retrieve(unused_url: str, filename: str) -> None:  # pylint: disable=unused-argument
            self.check_function_calls['url_retrieve_is_called'] = True
            if self.raise_error:
                raise Exception
        self.remove_swap = self.swap(os, 'remove', mock_remove)
        self.makedirs_swap = self.swap(os, 'makedirs', mock_makedirs)
        self.print_swap = self.swap(builtins, 'print', mock_print)
        self.url_retrieve_swap = self.swap(
            common, 'url_retrieve', mock_url_retrieve)

    def test_gcloud_install_without_errors(self) -> None:
        self.check_function_calls['open_is_called'] = False
        self.check_function_calls['extractall_is_called'] = False
        self.check_function_calls['close_is_called'] = False
        self.check_function_calls['copytree_is_called'] = False
        self.expected_check_function_calls['open_is_called'] = True
        self.expected_check_function_calls['extractall_is_called'] = True
        self.expected_check_function_calls['close_is_called'] = True
        self.expected_check_function_calls['copytree_is_called'] = True
        def mock_exists(path: str) -> bool:
            if path == common.GOOGLE_CLOUD_SDK_HOME:
                return False
            return True
        temp_file = tarfile.open(name=MOCK_TMP_UNTAR_PATH)
        def mock_open(name: str) -> tarfile.TarFile:  # pylint: disable=unused-argument
            self.check_function_calls['open_is_called'] = True
            return temp_file
        def mock_extractall(unused_self: str, path: str) -> None:  # pylint: disable=unused-argument
            self.check_function_calls['extractall_is_called'] = True
        def mock_close(unused_self: str) -> None:
            self.check_function_calls['close_is_called'] = True
        def mock_copytree(unused_src: str, unused_dst: str) -> None:  # pylint: disable=unused-argument
            self.check_function_calls['copytree_is_called'] = True
        def mock_isdir(path: str) -> bool:
            if path.endswith(('google/appengine', 'google/pyglib')):
                return False
            return True

        exists_swap = self.swap(os.path, 'exists', mock_exists)
        open_swap = self.swap(tarfile, 'open', mock_open)
        extractall_swap = self.swap(
            tarfile.TarFile, 'extractall', mock_extractall)
        close_swap = self.swap(tarfile.TarFile, 'close', mock_close)
        copytree_swap = self.swap(shutil, 'copytree', mock_copytree)
        isdir_swap = self.swap(os.path, 'isdir', mock_isdir)

        with self.remove_swap, self.makedirs_swap, self.print_swap:
            with self.url_retrieve_swap, exists_swap, isdir_swap:
                with open_swap, extractall_swap, close_swap, copytree_swap:
                    install_third_party_libs.install_gcloud_sdk()
        self.assertEqual(
            self.check_function_calls, self.expected_check_function_calls)
        self.assertTrue(
            'Download complete. Installing Google Cloud SDK...'
            in self.print_arr)

    def test_gcloud_install_with_errors(self) -> None:
        self.expected_check_function_calls['remove_is_called'] = False
        self.raise_error = True
        def mock_exists(path: str) -> bool:
            if path == common.GOOGLE_CLOUD_SDK_HOME:
                return False
            return True
        exists_swap = self.swap(os.path, 'exists', mock_exists)

        with self.remove_swap, self.makedirs_swap:
            with self.print_swap, self.url_retrieve_swap, exists_swap:
                with self.assertRaisesRegex(
                    Exception, 'Error downloading Google Cloud SDK.'):
                    install_third_party_libs.install_gcloud_sdk()
        self.assertEqual(
            self.check_function_calls, self.expected_check_function_calls)
        self.assertTrue(
            'Error downloading Google Cloud SDK. Exiting.'
            in self.print_arr)

    def test_directory_copying(self) -> None:
        correct_google_path = os.path.join(
            common.THIRD_PARTY_PYTHON_LIBS_DIR, 'google')
        def mock_check_call(unused_cmd_tokens: List[str]) -> None:
            pass
        def mock_isdir(path: str) -> bool:
            directories_that_do_not_exist = {
                os.path.join(correct_google_path, 'appengine'),
                os.path.join(correct_google_path, 'pyglib'),
                correct_google_path
            }
            if path in directories_that_do_not_exist:
                return False
            return True
        def mock_exists(path: str) -> bool:
            if path == common.GOOGLE_CLOUD_SDK_HOME:
                return False
            return True

        class MockProcess:
            returncode = 0
            stdout = 'No data to report.'
            stderr = 'None'
        def mock_subprocess_run(*args: str, **kwargs: str) -> MockProcess: # pylint: disable=unused-argument
            return MockProcess()

        temp_file = tarfile.open(name=MOCK_TMP_UNTAR_PATH)
        def mock_open(name: str) -> tarfile.TarFile:  # pylint: disable=unused-argument
            self.check_function_calls['open_is_called'] = True
            return temp_file
        def mock_extractall(unused_self: str, path: str) -> None:  # pylint: disable=unused-argument
            self.check_function_calls['extractall_is_called'] = True
        def mock_close(unused_self: str) -> None:
            self.check_function_calls['close_is_called'] = True
        def mock_remove(unused_self: str) -> None:
            pass
        open_swap = self.swap(tarfile, 'open', mock_open)
        extractall_swap = self.swap(
            tarfile.TarFile, 'extractall', mock_extractall)
        close_swap = self.swap(tarfile.TarFile, 'close', mock_close)

        initialized_directories = []
        def mock_mkdir(path: str, unused_mode: int = 0o777) -> None:
            initialized_directories.append(path)

        copied_src_dst_tuples = []
        def mock_copytree(src: str, dst: str) -> None:
            copied_src_dst_tuples.append((src, dst))

        correct_copied_src_dst_tuples = [(
            os.path.join(
                common.GOOGLE_APP_ENGINE_SDK_HOME, 'google', 'appengine'),
            os.path.join(correct_google_path, 'appengine')
        ), (
            os.path.join(
                common.GOOGLE_APP_ENGINE_SDK_HOME, 'google', 'pyglib'),
            os.path.join(correct_google_path, 'pyglib')
        )]

        swap_exists = self.swap(os.path, 'exists', mock_exists)
        swap_isdir = self.swap(os.path, 'isdir', mock_isdir)
        swap_mkdir = self.swap(os, 'mkdir', mock_mkdir)
        swap_copytree = self.swap(shutil, 'copytree', mock_copytree)
        swap_remove = self.swap(os, 'remove', mock_remove)
        popen_swap = self.swap(subprocess, 'Popen', mock_check_call)
        run_swap = self.swap(subprocess, 'run', mock_subprocess_run)
        check_call_swap = self.swap(subprocess, 'check_call', mock_check_call)

        with check_call_swap, popen_swap, close_swap, run_swap, swap_remove:
            with swap_isdir, swap_mkdir, swap_copytree, swap_exists:
                with self.url_retrieve_swap, open_swap, extractall_swap:
                    install_third_party_libs.install_gcloud_sdk()

        self.assertEqual(copied_src_dst_tuples, correct_copied_src_dst_tuples)
        self.assertEqual(
            initialized_directories,
            [common.GOOGLE_CLOUD_SDK_HOME, correct_google_path])
