import os
from pathlib import Path
from PIL import Image

def check_image_sizes(repo_path):
    """
    Check the sizes of all images in the repository. Report any images
    where the compressed size exceeds the original size by 1% or more.
    """
    failed_images = []
    print("Scanning images for compression...")

    for file_path in repo_path.glob("**/*.*"):
        if file_path.suffix.lower() in {".png", ".jpg", ".jpeg"}:
            try:
                with Image.open(file_path) as img:
                    original_size = file_path.stat().st_size
                    
                    if img.mode == "RGBA":
                        img = img.convert("RGB")
                    img.save("temp.jpg", optimize=True, quality=85)
                    compressed_size = Path("temp.jpg").stat().st_size
                    Path("temp.jpg").unlink()

                    if compressed_size > original_size * 1.01:
                        failed_images.append(file_path)
                        print(
                            f"[FAILED] {file_path} - Original: {original_size} bytes, "
                            f"Compressed: {compressed_size} bytes"
                        )
            except Exception as e:
                print(f"[ERROR] Could not process {file_path}: {e}")

    return failed_images

def main():
    repo_path = Path(".")
    failed_images = check_image_sizes(repo_path)

    if failed_images:
        print("\nThe following images exceed the compression threshold:")
        for file in failed_images:
            print(f"- {file}")
        print(
            "\nPlease compress these images using a tool like `trimage` and replace them in your PR. "
            "You can install Trimage using your package manager (e.g., `sudo apt install trimage` on Ubuntu)."
        )
        exit(1) 
    else:
        print("\nAll images passed the compression check.")

if __name__ == "__main__":
    main()

