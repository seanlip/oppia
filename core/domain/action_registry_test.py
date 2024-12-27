# Copyright 2018 The Oppia Authors. All Rights Reserved.
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

"""Tests for methods in the action registry."""

from __future__ import annotations
from unittest import mock
from core.domain import action_registry
from core.tests import test_utils
from typing import Any, Dict


class ActionRegistryUnitTests(test_utils.GenericTestBase):
    """Test for the action registry."""

    @mock.patch('core.domain.action_registry.Registry.get_all_action_types')
    @mock.patch('importlib.import_module')
    def test_ancestors_name(
        self,
        mock_import_module: mock.MagicMock,
        mock_get_all_action_types: mock.MagicMock
    ) -> None:
        """Test ancestor name processing in the action registry."""
        mock_get_all_action_types.return_value = ['ExplorationStart']

        class MockClass1:
            """Mock class for testing."""

            __name__ = 'MockClass1'
            # Here we use object because this is a mock base class
            # and does not have specific attributes or methods.
            __bases__ = (object,)

        mock_classes: Dict[str, type] = {
            'ExplorationStart': MockClass1,
        }

        # Here we use type Any because the return value can be anything.
        def mock_import_module_side_effect(module_name: str) -> Any:
            """Mock import module.

            Here we use Any because the return type of this function can vary
            depending on the attributes dynamically added to the mock module.
            """
            class MockModule:
                pass

            class_name = module_name.split('.')[-1]
            if class_name in mock_classes:
                setattr(MockModule, class_name, mock_classes[class_name])
            return MockModule()

        mock_import_module.side_effect = mock_import_module_side_effect

        refresh_method = getattr(action_registry.Registry, '_refresh')
        refresh_method()

        self.assertEqual(len(action_registry.Registry.get_all_actions()), 0)

    def test_action_registry(self) -> None:
        """Do some sanity checks on the action registry."""
        self.assertEqual(
            len(action_registry.Registry.get_all_actions()),
            3
        )

    def test_action_registry_when_registry_not_empty(self) -> None:
        """Do some sanity checks on the action registry."""
        refresh_method = getattr(action_registry.Registry, '_refresh')
        refresh_method()
        self.assertEqual(
            len(action_registry.Registry.get_all_actions()), 3
        )

    def test_cannot_get_action_by_invalid_type(self) -> None:
        """Testing with invalid action type.

        Invalid action type raises 'KeyError' with invalid_key
        as the error message.
        """
        with self.assertRaisesRegex(KeyError, 'fakeAction'):
            action_registry.Registry.get_action_by_type('fakeAction')

    def test_can_get_action_by_valid_type(self) -> None:
        """Testing with valid action type."""
        refresh_method = getattr(action_registry.Registry, '_refresh')
        refresh_method()
        self.assertIsNotNone(
            action_registry.Registry.get_action_by_type('ExplorationStart')
        )
