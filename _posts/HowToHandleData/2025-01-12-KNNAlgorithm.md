---
title: How to handle Data, and Images(14) KNN Algorithm
description: Introduction to KNN Algorithm
date: 2025-01-12
categories: [Handling Data and Images, KNN Algorithm]
tags: [Python, Study, Handling Data and Images, KNN Algorithm]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(14) KNN Algorithm](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(14)_KNN_Algorithm.ipynb)

## Topics

- [KNN Algorithm](#knn-algorithm)
- [Summary](#summary)

## KNN Algorithm

K-Nearest Neightbor
- KNN is one of the basic example of Supervised Learning as it requires Training Data
- From a lot of different labels, it finds the nearest data and determines its own label

```python
import cv2
import numpy as np
from matplotlib import pyplot as plt

# we're going to make random 25 datas that consists of either blue square(1) or red triangle(0)
# we're going to make green circle and see what it becomes (either 1 or 0) using KNN

# make a training data with size (25x2) where its x,y coordinates are from 0 to 100
trainData = np.random.randint(0, 100, (25, 2)).astype(np.float32)
# randomly select every data to be either 0 or 1
response = np.random.randint(0, 2, (25, 1)).astype(np.float32)

# make the color of data that is 0 to be red
red = trainData[response.ravel() == 0]
plt.scatter(red[:,0], red[:,1], 80, 'r', marker='^')
# make the color of data that is 1 to be blue
blue = trainData[response.ravel() == 1]
plt.scatter(blue[:,0], blue[:,1], 80, 'b', marker='s')

# make a new data(green circle) and make its x,y coordinate from 0  to 100 randomly
newcomer = np.random.randint(0, 100, (1,2)).astype(np.float32)
plt.scatter(newcomer[:,0], newcomer[:,1], 80, 'g', marker='o')

knn = cv2.ml.KNearest_create()
knn.train(trainData, cv2.ml.ROW_SAMPLE, response)
ret, results, neighbours, dist = knn.findNearest(newcomer, 3)

print("result :", results)
print("neighbours :", neighbours)
print("distance :", dist)

plt.show()
```

Output:

```
result : [[0.]]
neighbours : [[0. 0. 0.]]
distance : [[ 65. 130. 200.]]
```

Output | 
![Desktop View](/assets/img/HandleImageData/14-knn.png) | 

## Summary

From the result above, we can see that the green circle will be labeled as [0] meaning it'll be red triangle

The neighbours show that all 3 nearest neighbors are [0]

And each of the distance are [65, 130, 200]