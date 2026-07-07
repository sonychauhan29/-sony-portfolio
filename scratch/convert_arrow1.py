import re

with open('src/assets/arrow1.svg', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the base64 string
match = re.search(r'data:image/png;base64,([A-Za-z0-9+/=]+)', content)
if not match:
    print("Error: base64 image data not found!")
    exit(1)

base64_data = match.group(1)

new_svg = f'''<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="clip">
      <rect width="45.8594" height="45.4518" />
    </clipPath>
  </defs>
  <g transform="translate(45.4518, 0) rotate(90)">
    <g clip-path="url(#clip)">
      <image xlink:href="data:image/png;base64,{base64_data}" x="-81.528" y="0" width="199.7436" height="199.7436" preserveAspectRatio="none" />
    </g>
  </g>
</svg>'''

with open('scratch/arrow1_test.svg', 'w', encoding='utf-8') as f_out:
    f_out.write(new_svg)
print("Saved scratch/arrow1_test.svg")
