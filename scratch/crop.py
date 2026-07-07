from PIL import Image

img = Image.open('scratch/arrow1_extracted.png')
w, h = img.size
print(f"Extracted image size: {w}x{h}")

# For arrow1.svg:
# matrix(a 0 0 d tx ty)
# where a = 0.00444445, d = 0.0044843, tx = -1.77778, ty = 0
# With patternContentUnits="objectBoundingBox", the coordinates are normalized to [0,1] of the bounding box.
# Let's compute the crop region in pixels.
# The source image is 980x980.
# The normalized x of the rect (0 to 1) maps back to:
# rect_x = (x_pixel/980) * a + tx
# For rect_x = 0 => x_pixel = -tx / a * 980 = 1.77778 / 0.00444445 = 400.00045 pixels.
# For rect_x = 1 => x_pixel = (1 - tx) / a = (1.77778 + 1) / 0.00444445 = 625.00045 pixels.
# For rect_y = 0 => y_pixel = -ty / d = 0 pixels.
# For rect_y = 1 => y_pixel = (1 - ty) / d = 1 / 0.0044843 = 223.00024 pixels.

crop1 = img.crop((400, 0, 625, 223))
crop1.save('scratch/crop1.png')
print("Saved crop1.png (arrow1)")

# For arrow2.svg:
# a = 0.00339119, d = 0.00445477, tx = -0.0713646, ty = -2.55495
# For rect_x = 0 => x_pixel = -tx / a = 0.0713646 / 0.00339119 = 21.0441 pixels.
# For rect_x = 1 => x_pixel = (1 - tx) / a = 1.0713646 / 0.00339119 = 315.9258 pixels.
# For rect_y = 0 => y_pixel = -ty / d = 2.55495 / 0.00445477 = 573.5313 pixels.
# For rect_y = 1 => y_pixel = (1 - ty) / d = 3.55495 / 0.00445477 = 798.0097 pixels.

crop2 = img.crop((21, 574, 316, 798))
crop2.save('scratch/crop2.png')
print("Saved crop2.png (arrow2)")

# Let's count non-transparent pixels in both crops:
def count_non_transparent(image):
    alpha = image.split()[-1]
    non_zero = sum(1 for p in alpha.getdata() if p > 0)
    return non_zero

print(f"crop1 (arrow1) non-transparent pixels: {count_non_transparent(crop1)} / {crop1.width * crop1.height}")
print(f"crop2 (arrow2) non-transparent pixels: {count_non_transparent(crop2)} / {crop2.width * crop2.height}")
