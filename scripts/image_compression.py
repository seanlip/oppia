import os
import subprocess
from pathlib import Path
from PIL import Image
import tempfile
import sys
import shutil

def check_graphicsmagick():
    """Verify GraphicsMagick installation and return full path to gm executable."""
    # First check if 'gm' is in PATH
    gm_path = shutil.which('gm')
    if gm_path:
        return gm_path
    
    # Common installation paths to check
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
        "GraphicsMagick ('gm') not found in PATH or common locations. "
        "Please ensure GraphicsMagick is installed and accessible.\n"
        "Installation commands:\n"
        "- Ubuntu/Debian: sudo apt-get install graphicsmagick\n"
        "- macOS: brew install graphicsmagick\n"
        "- Windows: choco install graphicsmagick"
    )

def check_and_compress_images(repo_path):
    """Check and compress images using GraphicsMagick with lossless compression for specific formats."""

    try:
        gm_path = check_graphicsmagick()
    except RuntimeError as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)
    
    compressed_images = []
    supported_extensions = {".png", ".jpg", ".jpeg", ".webp"}
    
    for file_path in Path(repo_path).glob("**/*.*"):
        if file_path.suffix.lower() not in supported_extensions:
            continue
            
        try:
            with Image.open(file_path) as img:
                with tempfile.TemporaryDirectory() as tmpdirname:
                    temp_compressed = Path(tmpdirname) / f"compressed_{file_path.name}"
                    
                    # Configure compression based on file type
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
                    
                    result = subprocess.run(cmd, capture_output=True, text=True)
                    
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
                            print(f"[COMPRESSED] {file_path}")
                            print(f"Size: {original_size/1024:.1f}KB → {new_size/1024:.1f}KB ({(1 - new_size/original_size)*100:.1f}%)")
                            # print(f"  Original: {original_size} bytes")
                            # print(f"  New: {new_size} bytes")
                            # print(f"  Reduction: {(1 - new_size/original_size)*100:.2f}%")
        
        except Exception as e:
            print(f"[ERROR] Could not process {file_path}: {e}")
    
    return compressed_images

def main():
    repo_path = Path("./assets")
    # run this compress funnction till compressed image is not empty
    compressed_images = check_and_compress_images(repo_path)
    i=1
    while compressed_images:
        print("\nSummary of compressed images on iteration# ",i)
        total_saved = 0
        for image in compressed_images:
            saved = image['original_size'] - image['new_size']  
            total_saved += saved
            # print(f"- {image['path']}: Saved {saved} bytes")
        print(f"Total space saved: {total_saved} bytes")
        compressed_images = check_and_compress_images(repo_path)
        i+=1

    if not compressed_images:
        print("\nNo images required compression.")
        return
        
    

if __name__ == "__main__":
    main()

