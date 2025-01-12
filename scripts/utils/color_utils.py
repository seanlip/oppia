# Copyright 2023 The Oppia Authors. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Utility module for terminal text colorization.
Provides functions to apply ANSI color codes to strings for terminal output.
"""

from __future__ import annotations
import enum
import os
import typing


class AnsiColor(enum.Enum):
    """Enum for ANSI color codes."""

    RED = '\033[91m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RESET = '\033[0m'


#Controls whether color output is enabled or disabled.

ENABLE_COLOR = os.getenv('ENABLE_COLOR', 'true').lower() == 'true'


def apply_color(message: str, color_func: typing.Callable[[str], str]) -> str:
    """Applies color to a message if colorization is enabled.

    Args:
        message: str. The message to colorize.
        color_func: Callable[[str], str]. The color function to apply.

    Returns:
        str. Colorized message if enabled, original message otherwise.
    """
    return color_func(message) if ENABLE_COLOR else message


def colorize_error(message: str) -> str:
    """Wraps the message in red color for errors.

    Args:
        message: str. The error message to colorize.

    Returns:
        str. Red-colored message.
    """
    return f'{AnsiColor.RED.value}{message}{AnsiColor.RESET.value}'


def colorize_success(message: str) -> str:
    """Wraps the message in green color for success.

    Args:
        message: str. The success message to colorize.

    Returns:
        str. Green-colored message.
    """
    return f'{AnsiColor.GREEN.value}{message}{AnsiColor.RESET.value}'


def colorize_warning(message: str) -> str:
    """Wraps the message in yellow color for warnings.

    Args:
        message: str. The warning message to colorize.

    Returns:
        str. Yellow-colored message.
    """
    return f'{AnsiColor.YELLOW.value}{message}{AnsiColor.RESET.value}'
