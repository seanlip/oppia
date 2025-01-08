
#Utility module for terminal text colorization.
#Provides functions to apply ANSI color codes to strings for terminal output.


import os
from typing import Callable
from enum import Enum

class AnsiColor(Enum):
    RED = "\033[91m"
    GREEN = "\033[92m"
    YELLOW = "\033[93m"
    RESET = "\033[0m"

# Control for enabling/disabling color output
ENABLE_COLOR = os.getenv("ENABLE_COLOR", "true").lower() == "true"

def apply_color(message: str, color_func: Callable[[str], str]) -> str:
    """
    Applies color to a message if colorization is enabled.

    Args: color_func (Callable[[str], str]): The color function to apply.

    Returns: str: Colorized message if enabled, original message otherwise.
    """
    return color_func(message) if ENABLE_COLOR else message

def colorize_error(message: str) -> str:
    """
    Wraps the message in red color for errors.

    Args: message (str): The error message to colorize.

    Returns: str: Red-colored message.
    """
    return f"{AnsiColor.RED.value}{message}{AnsiColor.RESET.value}"

def colorize_success(message: str) -> str:
    """Wraps the message in green color for success."""
    return f"{AnsiColor.GREEN.value}{message}{AnsiColor.RESET.value}"

def colorize_warning(message: str) -> str:
    """Wraps the message in yellow color for warnings."""
    return f"{AnsiColor.YELLOW.value}{message}{AnsiColor.RESET.value}"