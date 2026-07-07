from PIL import Image

def get_bbox(png_path):
    img = Image.open(png_path)
    alpha = img.split()[-1]
    bbox = alpha.getbbox()
    print(f"Bounding box of non-transparent pixels in {png_path}: {bbox}")

get_bbox('scratch/arrow1_original.png')
get_bbox('scratch/arrow1_test.png')
