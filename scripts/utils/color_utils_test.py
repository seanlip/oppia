# Copyright 2023 The Oppia Authors. All Rights Reserved.
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

"""Unit tests for scripts/utils/color_utils.py."""

from __future__ import annotations

import unittest

from scripts.utils import color_utils


class ColorUtilsTests(unittest.TestCase):
    """Test class for color utility functions."""

    def test_colorize_error(self) -> None:
        input_text = 'Test error message'
        expected_output = '\033[91mTest error message\033[0m'
        self.assertEqual(
            color_utils.colorize_error(input_text), expected_output
        )

    def test_colorize_warning(self) -> None:
        input_text = 'Test warning message'
        expected_output = '\033[93mTest warning message\033[0m'
        self.assertEqual(
            color_utils.colorize_warning(input_text), expected_output
        )

    def test_colorize_success(self) -> None:
        input_text = 'Test success message'
        expected_output = '\033[92mTest success message\033[0m'
        self.assertEqual(
            color_utils.colorize_success(input_text), expected_output
        )


if __name__ == '__main__':
    unittest.main()
