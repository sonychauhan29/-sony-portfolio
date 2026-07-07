from PIL import Image

def analyze_png(png_path):
    img = Image.open(png_path)
    w, h = img.size
    print(f"Rendered image size: {w}x{h}")
    
    alpha = img.split()[-1]
    non_zero = sum(1 for p in alpha.getdata() if p > 0)
    print(f"Non-transparent pixels in {png_path}: {non_zero} / {w * h}")
    
    # Save a copy with a background color to inspect visually if needed
    bg = Image.new("RGBA", img.size, "WHITE")
    bg.paste(img, (0, 0), img)
    bg.save(png_path.replace('.png', '_on_white.png'))

analyze_png('scratch/arrow1_test.png')
