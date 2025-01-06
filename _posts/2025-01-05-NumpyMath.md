---
title: How to handle Data, and Images(2) - Numpy and Math
description: How to use Math operations on Numpy, and how matrix operations work.
date: 2025-01-05
categories: [Handling Data and Images]
tags: [Python, Study, Handling Data and Images]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(2) - Numpy and Math](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(2)_Numpy_and_Math.ipynb)

## Topics

- [Python's Numpy library can do basic operations](#pythons-numpy-library-can-do-basic-operations)
- [We can also use operations on Numpy arrays](#we-can-also-use-operations-on-numpy-arrays)
- [Using Numpy's masking operation](#using-numpys-masking-operation)
- [Numpy's statistical functions](#numpys-statistical-functions)
- [Summary](#summary)


## Python's Numpy library can do basic operations

Adding or Multiplying array with constant results in adding or multiplying every element

```python

import numpy as np

# create a 2 x 2 array from random integer 1 to 10
arr = np.random.randint(1, 10, size=4).reshape(2, 2)
print("arr\n", arr)

# arr * 10
arr_10 = arr*10
print("arr * 10\n", arr_10)
```

Output:

```
arr
 [[2 7]
 [7 4]]
arr * 10
 [[20 70]
 [70 40]]
 ```

## We can also use operations on Numpy arrays

Though for matrix to perform addition to another matrix, they have to be in same dimension, Numpy allows this with feature called **broadcasting**. This allows Numpy to perform operations on arrays of different shapes by automatically expanding the smaller array to match the shape of the larger one

Key rule for broadcasting:
1. The arrays are compared element-wise from right to left.
1. Two dimensions are compatible if:
    - They are equal, or
    - One of them is 1.

```python
# create a 2 x 2 array [[0,1]
#                       [2,3]]
arr1 = np.arange(4).reshape(2,2)

# create a 1 x 2 array [0, 1]
arr2 = np.arange(2)

# adding arr1 + arr2
arr3 = arr1 + arr2

print(arr3)
```

Output:

```
[[0 2]
 [2 4]]
```

```python
# create a 2 x 4 array [[0, 1, 2, 3]
#                       [4, 5, 6, 7]]
arr1 = np.arange(0, 8).reshape(2, 4)

# create a 2 x 4 array [[0, 1, 2, 3]
#                       [4, 5, 6, 7]]
arr2 = np.arange(0, 8).reshape(2, 4)

# merge arr1, arr2 [[0, 1, 2, 3]
#                   [4, 5, 6, 7]
#                   [0, 1, 2, 3]
#                   [4, 5, 6, 7]]
arr3 = np.concatenate([arr1, arr2], axis=0)

# create a 4 x 1 array [[0]
#                       [1]
#                       [2]
#                       [3]]
arr4 = np.arange(0, 4).reshape(4, 1)

# adding arr3 and arr4
print(arr3 + arr4)
```

Output: 

```
[[ 0  1  2  3]
 [ 5  6  7  8]
 [ 2  3  4  5]
 [ 7  8  9 10]]
```

## Using Numpy's masking operation

Instead of using for loop to change value of elements, we can use Numpy, which is much faster. It is mostly used in Image processing

```python
# create a 4 x 4 array with elements 0-15
arr1 = np.arange(16).reshape(4, 4)
print("arr1\n", arr1)

# changes elements to boolean that are less than 10 to True else False
arr2 = arr1 < 10
print("arr2\n", arr2)

# changes elements that are true from arr2 to 100
arr1[arr2] = 100
print("arr1\n", arr1)
```

Output:

```
arr1
 [[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]]
arr2
 [[ True  True  True  True]
 [ True  True  True  True]
 [ True  True False False]
 [False False False False]]
arr1
 [[100 100 100 100]
 [100 100 100 100]
 [100 100  10  11]
 [ 12  13  14  15]]
```

## Numpy's statistical functions

- [**numpy.max(a, axis=None, out=None, keepdims=(no value), initial=(no value), where=(no value))**](https://numpy.org/doc/stable/reference/generated/numpy.max.html):
    - returns the maximum of an array or maximum along an axis

- [**numpy.min(a, axis=None, out=None, keepdims=(no value), initial=(no value), where=(no value))**](https://numpy.org/doc/stable/reference/generated/numpy.min.html):
    - returns the minimum of an array or minimum along an axis

- [**numpy.sum(a, axis=None, dtype=None, out=None, keepdims=(no value), initial=(no value), where=(no value))**](https://numpy.org/doc/stable/reference/generated/numpy.sum.html):
    - sum of array elements over a given axis

- [**numpy.mean(a, axis=None, dtype=None, out=None, keepdims=(no value), *, where=(no value))**](https://numpy.org/doc/stable/reference/generated/numpy.mean.html)
    - compute the arithmetic mean along the specified axis.


```python
# create a 4 x 4 array from 0-15
arr = np.arange(16).reshape(4,4)

print("Max value:", np.max(arr))
print("Min value:", np.min(arr))
print("Summation:", np.sum(arr))
print("Average value:", np.mean(arr))
```

Output:

```
Max value: 15
Min value: 0
Summation: 120
Average value: 7.5
```

```python
# create a 4 x 4 array from 0-15
arr = np.arange(16).reshape(4,4)

print(arr)
print("Sum of each column:", np.sum(arr, axis=0))
print("Sum of each row:", np.sum(arr, axis=1))
```

Output:
```
[[ 0  1  2  3]
 [ 4  5  6  7]
 [ 8  9 10 11]
 [12 13 14 15]]
Sum of each column: [24 28 32 36]
Sum of each row: [24 28 32 36]
```

## Summary

- Adding or Multiplying array with constant results in adding or multiplying every element

- **numpy.max**: returns the maximum of an array or maximum along an axis

- **numpy.min**: returns the minimum of an array or minimum along an axis

- **numpy.sum**: sum of array elements over a given axis

- **numpy.mean**: compute the arithmetic mean along the specified axis.