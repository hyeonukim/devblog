---
title: How to handle Data, and Images(9) OpenCV Trackbar
description: How to create a Trackbar, and position Trackbar
date: 2025-01-09
categories: [Handling Data and Images, OpenCV]
tags: [Python, Study, Handling Data and Images, OpenCV]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(9) - OpenCV Trackbar](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(9)_OpenCV_Trackbar.ipynb)

## Topics

- [OpenCV Trackbar](#opencv-trackbar)
- [Summary](#summary)

## OpenCV Trackbar

**cv2.createTrackbar(track_bar, name, window_name, value, count, on_change)**: Creates trackbar (a slider or range control) with the specified name and range, assigns a variable value to be a position synchronized with the trackbar and specifies the callback function onChange to be called on the trackbar position change.
  - value: pointer to an integer variable whose value reflects the position of the slider.
  - count: Maximal position of the slider.
  - on_Change: Pointer to the function to be called every time the slider changes position.

**cv2.getTrackbarPos(track_bar, name, window_name)**: The function returns the current position of the specified trackbar.

This code below should be ran in separate IDE (VS Code, Pycharm)

```python
import cv2
import numpy as np

def change_color(x):
  r = cv2.getTrackbarPos("R", "Image")
  g = cv2.getTrackbarPos("G", "Image")
  b = cv2.getTrackbarPos("B", "Image")

  image[:] = [b,g,r]
  cv2.imshow("Image", image)

image = np.zeros((600, 400, 3), np.uint8)
cv2.namedWindow("Image")

cv2.createTrackbar("R", "Image", 0, 255, change_color)
cv2.createTrackbar("G", "Image", 0, 255, change_color)
cv2.createTrackbar("B", "Image", 0, 255, change_color)

cv2.imshow("Image", image)
cv2.waitKey(0)
```

Once you run the program, you will see a window called 'Image' pop up, and and controllable Trackbar above like image below and you can change the color of these by using the Tracker

Base program | R,G,B = 255,0,0 | R,G,B = 0, 255, 0 
![Desktop View](/assets/img/HandleImageData/9-output_base.PNG) | ![Desktop View](/assets/img/HandleImageData/9-output_red.PNG) | ![Desktop View](/assets/img/HandleImageData/9-output_green.PNG)

R,G,B = 0, 0, 255 | R,G,B = 128, 87, 102
![Desktop View](/assets/img/HandleImageData/9-output_blue.PNG) | ![Desktop View](/assets/img/HandleImageData/9-output_random.PNG)

## Summary

- **cv2.createTrackbar()**: Creates trackbar
- **cv2.getTrackbarPos()**: The function returns the current position of the specified trackbar.