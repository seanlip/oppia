# coding: utf-8
# Copyright 2023 The Oppia Authors. All Rights Reserved.
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS-IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""Test cases for image compression script using GraphicsMagick."""

from __future__ import annotations
import unittest
from unittest.mock import patch, MagicMock
from pathlib import Path
import tempfile
import os
import shutil
from PIL import Image
from image_compression import check_graphicsmagick, check_and_compress_images, main

class TestImageCompression(unittest.TestCase):
    def setUp(self):
        """Set up test environment before each test"""
        # Create temporary directory for test files
        self.test_dir = tempfile.mkdtemp()
        self.repo_path = Path(self.test_dir) / "assets"
        # Ensure the directory exists
        self.repo_path.mkdir(parents=True, exist_ok=True)

        # Create a test image
        self.test_image = self.repo_path / "test.png"
        img = Image.new('RGB', (100, 100), color='red')
        img.save(self.test_image)

    def tearDown(self):
        """Clean up after each test"""
        shutil.rmtree(self.test_dir)

    def test_check_graphicsmagick_in_path(self):
        """Test when GraphicsMagick is in PATH"""
        with patch('shutil.which') as mock_which:
            mock_which.return_value = "/usr/bin/gm"
            self.assertEqual(check_graphicsmagick(), "/usr/bin/gm")

    def test_check_graphicsmagick_in_common_paths(self):
        """Test when GraphicsMagick is in common paths but not in PATH"""
        with patch('shutil.which') as mock_which:
            with patch('os.path.isfile') as mock_isfile:
                mock_which.return_value = None
                mock_isfile.side_effect = lambda x: x == "/usr/bin/gm"
                self.assertEqual(check_graphicsmagick(), "/usr/bin/gm")

    def test_check_graphicsmagick_not_found(self):
        """Test when GraphicsMagick is not found anywhere"""
        with patch('shutil.which') as mock_which:
            with patch('os.path.isfile') as mock_isfile:
                mock_which.return_value = None
                mock_isfile.return_value = False
                with self.assertRaises(RuntimeError):
                    check_graphicsmagick()

    def test_check_and_compress_jpg(self):
        """Test JPG compression"""
        # Create a test JPG in the repo directory
        jpg_path = self.repo_path / "test.jpg"
        img = Image.new('RGB', (100, 100), color='blue')
        img.save(jpg_path)
        
        # Mock GraphicsMagick check
        with patch('image_compression.check_graphicsmagick') as mock_gm:
            mock_gm.return_value = "/usr/bin/gm"
            
            # Mock subprocess run
            mock_result = MagicMock()
            mock_result.returncode = 0
            
            with patch('subprocess.run', return_value=mock_result):
                # Mock the file statistics to simulate compression
                original_stat = MagicMock()
                original_stat.st_size = 1000
                compressed_stat = MagicMock()
                compressed_stat.st_size = 800
                
                with patch('pathlib.Path.stat', side_effect=[original_stat, compressed_stat]):
                    compressed_images = check_and_compress_images(self.repo_path)
                    
                    self.assertEqual(len(compressed_images), 1)
                    self.assertEqual(compressed_images[0]['path'].name, 'test.jpg')
                    self.assertEqual(compressed_images[0]['original_size'], 1000)
                    self.assertEqual(compressed_images[0]['new_size'], 800)

    def test_check_and_compress_webp(self):
        """Test WebP compression"""
        webp_path = self.repo_path / "test.webp"
        img = Image.new('RGB', (100, 100), color='green')
        img.save(webp_path, 'WEBP')
        
        with patch('image_compression.check_graphicsmagick') as mock_gm:
            mock_gm.return_value = "/usr/bin/gm"
            
            mock_result = MagicMock()
            mock_result.returncode = 0
            
            with patch('subprocess.run', return_value=mock_result):
                original_stat = MagicMock()
                original_stat.st_size = 1000
                compressed_stat = MagicMock()
                compressed_stat.st_size = 800
                
                with patch('pathlib.Path.stat', side_effect=[original_stat, compressed_stat]):
                    compressed_images = check_and_compress_images(self.repo_path)
                    self.assertEqual(len(compressed_images), 1)
                    self.assertEqual(compressed_images[0]['path'].name, 'test.webp')

    def test_unsupported_format(self):
        """Test handling of unsupported file format"""
        test_file = self.repo_path / "test.txt"
        test_file.write_text("test content")
        
        with patch('image_compression.check_graphicsmagick') as mock_gm:
            mock_gm.return_value = "/usr/bin/gm"
            compressed_images = check_and_compress_images(self.repo_path)
            self.assertEqual(len(compressed_images), 0)

    def test_compression_error(self):
        """Test handling of compression failure"""
        with patch('image_compression.check_graphicsmagick') as mock_gm:
            mock_gm.return_value = "/usr/bin/gm"
            
            mock_result = MagicMock()
            mock_result.returncode = 1
            
            with patch('subprocess.run', return_value=mock_result):
                compressed_images = check_and_compress_images(self.repo_path)
                self.assertEqual(len(compressed_images), 0)

    def test_no_size_reduction(self):
        """Test when compression doesn't reduce file size"""
        png_path = self.repo_path / "test2.png"
        img = Image.new('RGB', (100, 100), color='red')
        img.save(png_path)
        
        with patch('image_compression.check_graphicsmagick') as mock_gm:
            mock_gm.return_value = "/usr/bin/gm"
            
            mock_result = MagicMock()
            mock_result.returncode = 0
            
            with patch('subprocess.run', return_value=mock_result):
                # Mock same size for both original and compressed
                mock_stat = MagicMock()
                mock_stat.st_size = 1000
                
                with patch('pathlib.Path.stat', return_value=mock_stat):
                    compressed_images = check_and_compress_images(self.repo_path)
                    self.assertEqual(len(compressed_images), 0)

    def test_main_function_with_compression(self):
        """Test main function with successful compression"""
        with patch('image_compression.check_and_compress_images') as mock_compress:
            mock_compress.side_effect = [
                [{'path': 'test.png', 'original_size': 1000, 'new_size': 800}],  # First iteration
                []  # Second iteration (no more compression needed)
            ]
            
            with patch('pathlib.Path') as mock_path:
                mock_path.return_value = self.repo_path
                main()
                self.assertEqual(mock_compress.call_count, 2)

    def test_main_function_no_compression(self):
        """Test main function when no compression is needed"""
        with patch('image_compression.check_and_compress_images') as mock_compress:
            mock_compress.return_value = []
            
            with patch('pathlib.Path') as mock_path:
                mock_path.return_value = self.repo_path
                main()
                self.assertEqual(mock_compress.call_count, 1)


if __name__ == '__main__':
    unittest.main()