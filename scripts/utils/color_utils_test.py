"""Unit tests for scripts/utils/color_utils.py."""

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