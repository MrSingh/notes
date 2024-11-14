```python
import cv2
from PIL import Image
```


```python
# Load the image
image_path = 'data/amrit_full.jpg'
image = cv2.imread(image_path)
```


```python
# Define the size for the passport photo (e.g., 2x2 inches at 300 DPI)
passport_width = int(35 * 11.81)  # 35mm to pixels
passport_height = int(45 * 11.81)  # 45mm to pixels
```


```python
# Resize the image
resized_image = cv2.resize(image, (passport_width, passport_height))
```


```python
# Save the resized image
cv2.imwrite('data/amrit_passport.jpg', resized_image)
```


```python
# Optional: Convert to RGB and save using Pillow for better quality
passport_image = Image.open('data/amrit_passport.jpg')
passport_image = passport_image.convert('RGB')
passport_image.save('data/amrit_passport_final.jpg', 'JPEG', quality=95)

print("Passport photo saved as 'amrit_passport_final.jpg'")
```
