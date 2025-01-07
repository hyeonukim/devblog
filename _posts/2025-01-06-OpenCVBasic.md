---
title: How to handle Data, and Images(4) Introduction To OpenCV
description: Introduction on OpenCV library, and how to upload images in CoLab
date: 2025-01-05
categories: [Handling Data and Images, Numpy]
tags: [Python, Study, Handling Data and Images, Numpy]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(4) - Introduction To OpenCV](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(4)_Introduction_To_OpenCV.ipynb)

## Topics


- [How to upload files in Colab](#how-to-upload-files-in-colab)
- [OpenCV's basic functions](#opencvs-basic-functions)
- [How to output an Image in CoLab](#how-to-output-an-image-in-colab)
- [Summary](#summary)


## How to upload files in Colab

Before we dive into how to use OpenCV library, we should know how to upload images in Google CoLab. There are various methods to upload a file, but this instance we're going to be using this method

```python
from google.colab import files
uploaded = files.upload()
```

Once you run the code, you should be able to upload a file

## OpenCV's basic functions

OpenCV is an open source library that is commonly used for computer vision, image handling, video handling. You can use this library in C, C++, and Python.

There are 3 basic functions that we must know to use OpenCV.

- **cv2.imread(file_name, flag)**: Loads an image from a file
- **cv2.imshow(title, image)**: Displays an image
- **cv2.cvtColor(image, flag)**: converts the image's color

## How to output an Image in CoLab

Now that we know how to load, display, and convert the color of image, we must know how to display this image in Google CoLab. If you're just using Python to do this, then we can just use **cv2.imshow**, but CoLab does not allow this.

We must use **Matplotlib** to output an image for CoLab.

However, since OpenCV uses BGR for images, and Matplotlib uses RGB, we must convert the color to output an image using Matplotlib

```python
import cv2
import matplotlib.pyplot as plt

# laods an image file 'chanel.jpg' and name it img_basic
img_basic = cv2.imread('chanel.jpg', cv2.IMREAD_COLOR)
# since CV2 used BGR, we need to convert the color to RGB using cvtColor for Matplotlib
plt.imshow(cv2.cvtColor(img_basic, cv2.COLOR_BGR2RGB))
plt.show()

# convert the color to gray
img_basic = cv2.cvtColor(img_basic, cv2.COLOR_BGR2GRAY)
# since CV2 uses BGR, we need to convert the color to RGB using cvtColro for Matplotlib
plt.imshow(cv2.cvtColor(img_basic, cv2.COLOR_GRAY2RGB))
plt.show()
```
Output:

![Desktop View](/assets/img/HandleImageData/4-HowToOutputImageInColab.PNG)


## Summary

- To upload a file in CoLab use:
```python
from google.colab import files
uploaded = files.upload()
```

- **cv2.imread**: Loads an image from a file

- **cv2.imshow**: Displays an image

- **cv2.cvtColor**: converts the image's color

- Since CoLab must use Matplotlib to output an image, we must convert the color of BGR from OpenCV to RGB for Matplotlib