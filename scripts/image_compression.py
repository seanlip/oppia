# coding: utf-8
#
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

"""Script to compress images in the repository using GraphicsMagick."""

from __future__ import annotations
import os
import pathlib
import shutil
import subprocess
import sys
import tempfile
from PIL import Image # pylint: disable=import-error


def check_graphicsmagick() -> None:
    """Verify GraphicsMagick installation
        and return full path to gm executable.
    """

    gm_path = shutil.which('gm')
    if gm_path:
        return gm_path

    common_paths = [
        '/usr/bin/gm',
        '/usr/local/bin/gm',
        '/opt/homebrew/bin/gm',
        'C:\\Program Files\\GraphicsMagick\\gm.exe'
    ]

    for path in common_paths:
        if os.path.isfile(path):
            return path

    raise RuntimeError(
        'GraphicsMagick not found in PATH or common locations.'
        'Please ensure GraphicsMagick is installed and accessible.\n'
    )


def check_and_compress_images(repo_path) -> None:
    """Check and compress images using GraphicsMagick
        with lossless compression for specific formats.
    """

    try:
        check_graphicsmagick()
    except RuntimeError as e:
        print(f'ERROR: {e}', file=sys.stderr)
        sys.exit(1)

    compressed_images = []
    supported_extensions = {'.png', '.jpg', '.jpeg', '.webp'}

    for file_path in pathlib.Path(repo_path).glob('**/*.*'):
        if file_path.suffix.lower() not in supported_extensions:
            continue

        try:
            with Image.open(file_path):
                with tempfile.TemporaryDirectory() as tmpdir:
                    temp_compressed = (
                        pathlib.Path(tmpdir) / f'compressed_{file_path.name}'
                    )

                    if file_path.suffix.lower() == '.png':
                        cmd = [
                            'gm', 'convert',
                            str(file_path),
                            '-strip',
                            '-compress', 'Zip',
                            str(temp_compressed)
                        ]
                    elif file_path.suffix.lower() in {'.jpg', '.webp'}:
                        cmd = [
                            'gm', 'convert',
                            str(file_path),
                            '-strip',
                            '-compress', 'LZW',
                            str(temp_compressed)
                        ]

                    result = subprocess.run(
                        cmd, capture_output=True, text=True, check=False
                        )

                    if result.returncode == 0 and temp_compressed.exists():
                        original_size = file_path.stat().st_size
                        new_size = temp_compressed.stat().st_size

                        if new_size < original_size * 0.99:
                            with open(temp_compressed, 'rb') as f:
                                compressed_data = f.read()
                            with open(file_path, 'wb') as f:
                                f.write(compressed_data)

                            compressed_images.append({
                                'path': file_path,
                                'original_size': original_size,
                                'new_size': new_size
                            })
                            print(f'[COMPRESSED] {file_path}')
                            print(
                                f'Size: {original_size/1024:.1f}KB '
                                f'→ {new_size/1024:.1f}KB '
                                f'({(1 - new_size/original_size)*100:.1f}%)'
                            )

        except Exception as e:
            print(f'[ERROR] Could not process {file_path}: {e}')

    return compressed_images


def main() -> None:
    """Main function to check and compress images in the repository."""
    repo_path = pathlib.Path('./assets')
    compressed_images = check_and_compress_images(repo_path)
    i = 1
    while compressed_images:
        print('\nSummary of compressed images on iteration# ', i)
        total_saved = 0
        for image in compressed_images:
            saved = image['original_size'] - image['new_size']
            total_saved += saved
        print(f'Total space saved: {total_saved} bytes')
        compressed_images = check_and_compress_images(repo_path)
        i = i + 1

    if not compressed_images:
        print('\nNo images required compression.')
        return


if __name__ == '__main__': # pragma: no cover
    main()
