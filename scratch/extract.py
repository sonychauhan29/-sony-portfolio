import re
import base64
import os

os.makedirs('scratch', exist_ok=True)

def extract_png(svg_path, output_png_path):
    with open(svg_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Search for base64 image data
    match = re.search(r'data:image/png;base64,([A-Za-z0-9+/=]+)', content)
    if match:
        base64_data = match.group(1)
        image_data = base64.b64decode(base64_data)
        with open(output_png_path, 'wb') as f_out:
            f_out.write(image_data)
        print(f"Extracted PNG from {svg_path} to {output_png_path}, size: {len(image_data)} bytes")
    else:
        print(f"No base64 PNG found in {svg_path}")

extract_png('src/assets/arrow1.svg', 'scratch/arrow1_extracted.png')
extract_png('src/assets/arrow2.svg', 'scratch/arrow2_extracted.png')
