---
title: How to handle Data, and Images(7) Merging Image
description: How to merge Image using OpenCV
date: 2025-01-08
categories: [Handling Data and Images, OpenCV]
tags: [Python, Study, Handling Data and Images, OpenCV]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(7) - Merging Image](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(7)_Merging_Image.ipynb)

## Topics

- [Merging Image](#merging-image)
- [Summary](#summary)


## Merging Image

There are two ways to add images
1. **cv2.add()**: uses saturation arithmetic, meaning that if addition results below 0, it returns 0. If addition results greater than 255, returns 255
2. **np.add()**: uses modulo arithmetic, meaning that if addition results modulo 256 (Example: addition results in 257, then it would return 257 % 256 = 1)

Because of this, when adding images, it's much better to use cv2.add() in most cases
When using these functions, the two images must have same size

```python
import cv2
import matplotlib.pyplot as plt

image1 = cv2.imread('chanelsun.jpg')
image2 = cv2.imread('bga.jpg')

# checking size of the image
print(image1.shape)
print(image2.shape)

# since two images have different size, we must resize
height, width = image1.shape[0], image1.shape[1]

image2 = cv2.resize(image2, (width, height))
# after resizing
print(image2.shape)

# using cv2.add() saturation arithmetic
result = cv2.add(image1, image2)
plt.imshow(cv2.cvtColor(result, cv2.COLOR_BGR2RGB))
plt.show()

# using np.add() modulo arithmetic
result = image1 + image2
plt.imshow(cv2.cvtColor(result, cv2.COLOR_BGR2RGB))
plt.show()
```

Output:
```
(720, 1280, 3)
(360, 694, 3)
(720, 1280, 3)
```

![Desktop View](/assets/img/HandleImageData/7-opencv.PNG) | ![Desktop View](/assets/img/HandleImageData/7-np.PNG) 

As you can see, cv2.add() shows a better result with sautration arithmetic.

## Summary

- **cv2.add()**: uses saturation arithmetic, meaning that if addition results below 0, it returns 0. If addition results greater than 255, returns 255
- **np.add()**: uses modulo arithmetic, meaning that if addition results modulo 256 (Example: addition results in 257, then it would return 257 % 256 = 1)
- The two images you're trying to add must be in same size.
- Due to how cv2.add() uses saturation arithmetic, it shows much better result when adding image.