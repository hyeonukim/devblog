---
title: How to handle Data, and Images(13) OpenCV Filtering
description: How to filter using OpenCV
date: 2025-01-11
categories: [Handling Data and Images, OpenCV]
tags: [Python, Study, Handling Data and Images, OpenCV]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(13) OpenCV Filtering](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(13)_OpenCV_Filtering.ipynb)

## Topics
 
- [OpenCV Filtering](#opencv-filtering)
- [Summary](#summary)

## OpenCV Filtering

- we can apply kernel to image to make the image more blurry
- when we make image more blurry it can reduce the noise of the image

**Convolution**

Basic Image: $\begin{bmatrix}5 &4 & 3 &2 & 5 \\\ 4 & 6 & 5 & 4 & 3 \\\ 7 & 5 & 2 & 5 & 9 \\\ 8 & 5 & 6 & 1 & 9 \\\ 5 & 7 & 7 & 8 & 6 \end{bmatrix} $

Kernel: $ \begin{bmatrix} 1 & 2 & 1 \\\ 2 & 5 & 2 \\\ 1 & 2 & 1\end{bmatrix}$

then for every element we multiply it by kernel. 

For example for the output after convolution operation at [2][2] would be 

$\begin{bmatrix} 6 & 5 & 4 \\\ 5 & 2 & 5 \\\ 5 & 6 & 1\end{bmatrix}$ * $\begin{bmatrix} 1 & 2 & 1 \\\ 2 & 5 & 2 \\\ 1 & 2 & 1\end{bmatrix}$ = $\begin{bmatrix} 6\times1 & 5\times2 & 4\times1 \\\ 5\times2 & 2\times5 & 5\times2 \\\ 5\times1 & 6\times2 & 1\times1 \end{bmatrix} $ = Total Sum After Multiplication / Total Sum of Kernel elements = $\frac{68}{17}$

**Basic Kernel**: where every element is the same * 1/sum of all elements

$\begin{bmatrix} 1 & 1 & 1 & 1 & 1\\\ 1 & 1 & 1 & 1 & 1\\\ 1 & 1 & 1 & 1 & 1\\\ 1 & 1 & 1 & 1 & 1\\\ 1 & 1 & 1 & 1 & 1 \end{bmatrix} * \frac{1}{25}$

**Gaussian Kernel**: matrix(highest in the middle and lower the value further from the middle) * 1/sum of all elements

$\begin{bmatrix} 1 & 4 & 7 & 4 & 1\\\ 4 & 16 & 26 & 16 & 4\\\ 7 & 26 & 41 & 26 & 7\\\ 4 & 16 & 26 & 16 & 4\\\ 1 & 4 & 7 & 4 & 1 \end{bmatrix} * \frac{1}{273}$

### Basic Blurring by making our own basic Kernel

```python
import cv2
import matplotlib.pyplot as plt
import numpy as np

image = cv2.imread('chanel.jpg')
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
plt.show()

size = 25
kernel = np.ones((size, size), np.float32) / (size**2)

dst = cv2.filter2D(image, -1, kernel)
plt.imshow(cv2.cvtColor(dst, cv2.COLOR_BGR2RGB))
plt.show()
```

Output:

Base Image | Basic Blurring by making our own Basic Kernel
![Desktop View](/assets/img/HandleImageData/13-base1.png) | ![Desktop View](/assets/img/HandleImageData/13-base2.png)

### Basic Blurring

```python
import cv2
import matplotlib.pyplot as plt

image = cv2.imread('chanel.jpg')
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
plt.show()

dst = cv2.blur(image, (25, 25))
plt.imshow(cv2.cvtColor(dst, cv2.COLOR_BGR2RGB))
plt.show()
```

Output:

Base Image | Basic Blurring
![Desktop View](/assets/img/HandleImageData/13-basic3.png) | ![Desktop View](/assets/img/HandleImageData/13-basic4.png)

### Gaussian Blur

```python
import cv2
import matplotlib.pyplot as plt

image = cv2.imread('chanel.jpg')
plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))
plt.show()

# kernel_size must be odd number
dst = cv2.GaussianBlur(image, (25, 25), 0)
plt.imshow(cv2.cvtColor(dst, cv2.COLOR_BGR2RGB))
plt.show()
```

Output:

Base Image | Gaussian Blurring
![Desktop View](/assets/img/HandleImageData/13-gaus1.png) | ![Desktop View](/assets/img/HandleImageData/13-gaus2.png)


## Summary

We can blur an image using **Convolution** operation towards the image

There are two types of Kernel we can apply for Image Blurring

- **Basic Kernel**: where every element is the same * 1/sum of all elements
  - **cv2.blur(image, (x, x))**, where $(x,x)$ is a size of Kernel
- **Gaussian Kernel**: matrix(highest in the middle and lower the value further from the middle) * 1/sum of all elements
  - **cv2.GaussianBlur(image, (x, x), 0)**, where $(x,x)$ is a size of Kernel, and $x$ must be odd number

The bigger the size of Kernel more blurry the image gets