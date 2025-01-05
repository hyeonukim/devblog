---
title: Computer Vision(1) - How to use Numpy
description: How to use Numpy in Python, and basic operations in Numpy.
date: 2025-01-04
categories: [Computer Vision]
tags: [Python, Study, Computer Vision]
math: true
---

## Lesson Notes in .ipynb file

[Computer Vision(1) - How to use Numpy](https://github.com/hyeonukim/ComputerVisionStudyNote/blob/main/computervision_1_how_to_use_numpy.ipynb)

## Topics

- [What is Numpy?](#what-is-numpy)
- [Basic Terms](#basic-terms)
- [Importing Numpy and how to make List/Array with Numpy](#importing-numpy-and-how-to-make-list/array-with-numpy)
- [Some basic operations in Numpy](#summary)
- [Merging two array using Numpy](#merging-two-array-using-numpy)
- [Using Reshape allows array to be in different shape](#using-reshape-allows-array-to-be-in-different-shape)
- [More example on Concatenate and Reshape](#more-example-on-concatenate-and-reshape)
- [We can also split the array](#we-can-also-split-the-array)
- [Summary](#summary)

## What is Numpy?

 - Numpy is a open source library that can be used with Python. 
 - Since a lot of data can be represented in a matrix format, we can use Numpy to ease this operation. 
 - Using Numpy is faster than using Python's List and is a much better solution to a lot of cases.

## Basic Terms:
- **Vector**: 1 dimension list
- **Matrix**: 2 dimension list
- **Tensor**: 3 dimension list

Now that we know these terms, we can straight get into how to use Numpy

## Importing Numpy and how to make List/Array with Numpy

- **import numpy as np**: we first need to import the numpy library and to use, we just call 'np'
- [**numpy.array(object, dtype=None, *, copy=True, order='K', subok=False, ndmin=0, like=None)**](https://numpy.org/doc/stable/reference/generated/numpy.array.html): 
    - create a numpy array

```python
import numpy as np

list_data = [1, 2, 3]
arr = np.array(list_data)

print(arr.size)     
print(arr.dtype)    
print(arr[2])       
```

Output:
```
3
int64
3
```

## Some basic operations in Numpy

- [**numpy.arange([start, ]stop, [step, ]dtype=None, *, device=None, like=None)**](https://numpy.org/doc/stable/reference/generated/numpy.arange.html): 
    - return evenly spaced values within a given interval 
- [**numpy.zeros(shape, dtype=float, order='C', *, like=None)**](https://numpy.org/doc/stable/reference/generated/numpy.zeros.html): 
    - returns a new array of given shape and type, filled with zeros
- [**numpy.ones(shape, dtype=None, order='C', *, device=None, like=None)**](https://numpy.org/doc/stable/reference/generated/numpy.ones.html): 
    - returns a new array of given shape and type, filled with ones
- [**numpy.random.randint(low, high=None, size=None, dtype=int)**](https://numpy.org/doc/2.1/reference/random/generated/numpy.random.randint.html): 
    - returns random integers from low to high
- [**numpy.random.normal(loc=0.0, scale=1.0, size=None)**](https://numpy.org/doc/stable/reference/random/generated/numpy.random.normal.html):
    - draw random samples from a normal (Gaussian) distribution

```python
# creating 1d array [0, 1, 2, 3] (from 0 to 3)
# you can think of this like for i in range(4)
arr1 = np.arange(4)
print("arr1:\n", arr1)

# create a 4x4 2d array(matrix) with value float 0
arr2 = np.zeros((4, 4), dtype = float)
print("arr2:\n", arr2)

# create a 3x3 2d array(matrix) with value string 1
arr3 = np.ones((3, 3), dtype=str)
print("arr3:\n", arr3)

# create a 3x3 2d array(matrix) with random values 0 to 9
arr4 = np.random.randint(0, 10, (3, 3))
print("arr4:\n", arr4)

# create a 3x3 2d array(matrix) where mean value is 0 with standard deviation of 1
arr5 = np.random.normal(0, 1, (3, 3))
print("arr5:\n", arr5)
```

Output:
```
arr1:
 [0 1 2 3]

arr2:
 [[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]

arr3:
 [['1' '1' '1']
 ['1' '1' '1']
 ['1' '1' '1']]

arr4:
 [[9 2 6]
 [7 9 0]
 [6 5 4]]

arr5:
 [[ 0.66755247 -0.16216641  0.81601341]
 [ 0.7853595  -0.58722737  0.2097311 ]
 [ 1.24401384  0.39303442 -1.37390758]]
```

## Merging two array using Numpy

- [**numpy.concatenate((a1, a2, ...), axis=0, out=None, dtype=None, casting="same_kind")**](https://numpy.org/doc/stable/reference/generated/numpy.concatenate.html):
    - join a sequence of arrays along an existing axis

```python
arr1 = np.array([1, 2, 3])
arr2 = np.array([4, 5, 6])
# merge two array arr1, arr2 in a 1D array(vector)
arr3 = np.concatenate([arr1, arr2])

print(arr3.shape)
print(arr3)
```

Output:
```
(6,)
[1 2 3 4 5 6]
```

## Using Reshape allows array to be in different shape
- [**numpy.reshape(a, /, shape=None, order='C', *, newshape=None, copy=None)**](https://numpy.org/doc/stable/reference/generated/numpy.reshape.html):
    - gives a new shape to an array without changing its data

```python
# array 1 is a 1x4 array
arr1 = np.array([1,2,3,4])
# using reshape to make 2x2 array
arr2 = arr1.reshape((2,2))
print("arr2 shape\n", arr2.shape)
print("arr2\n", arr2)
```

Output:
```
arr2 shape
 (2, 2)

arr2
 [[1 2]
 [3 4]]
```

## More example on Concatenate and Reshape

```python
# create a 1x4 matrix from 0 to 3
arr1 = np.arange(4).reshape(1, 4)
# create 2x4 matrix from 0 to 7
arr2 = np.arange(8).reshape(2, 4)

print("arr1\n", arr1)
print("arr2\n", arr2)

# merge two array
arr3 = np.concatenate([arr1, arr2], axis=0)
print("arr3\n", arr3)
```

Output:
```
arr1
 [[0 1 2 3]]

arr2
 [[0 1 2 3]
 [4 5 6 7]]

arr3
 [[0 1 2 3]
 [0 1 2 3]
 [4 5 6 7]]
```

## We can also split the array
- [**numpy.split(ary, indices_or_sections, axis=0)**](https://numpy.org/doc/stable/reference/generated/numpy.split.html):
    - split an array into multiple sub-arrays as views into ary.

```python
# create a 2x4 matrix from 0 to 7
arr = np.arange(8).reshape(2, 4)
print("arr\n", arr)

#split the array into 2 vertically
left, right = np.split(arr, [2], axis=1)

print("left\n", left)
print("right\n", right)
```

Output:
```
arr
 [[0 1 2 3]
 [4 5 6 7]]
 
left
 [[0 1]
 [4 5]]
 
right
 [[2 3]
 [6 7]]
```

## Summary

- **import nupmy as np**: importing numpy
- **numpy.array**: creates a numpy array
- **numpy.arange**: returns evenly spaced values within a given interval
- **numpy.zeros**: returns a new array of given shape and type, filled with zeros
- **numpy.ones**: returns a new array of given shape and type, filled with ones
- **numpy.random.randint**: returns random integers from low to high
- **numpy.random.normal**: draw random samples from a normal (Gaussian) distribution
- **numpy.concatenate**: join a sequence of arrays along an existing axis
- **numpy.reshape**: gives a new shape to an array without changing its data
- **numpy.split**: split an array into multiple sub-arrays as views into ary

