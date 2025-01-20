---
title: How to handle Data, and Images(3) - Numpy Usage
description: More operations that are commonly used in Numpy.
date: 2025-01-05
categories: [Handling Data and Images, Numpy]
tags: [Python, Study, Handling Data and Images, Numpy]
math: true
---

## Lesson Notes in .ipynb file

[How to handle Data, and Images(3) - Numpy Usage](https://github.com/hyeonukim/DataProcessing_ImageHandling/blob/main/How_to_handle_Data%2C_and_Images(3)_Numpy's_Usage.ipynb)

## Topics

- [Python's Numpy is capable of saving and loading data](#pythons-numpy-is-capable-of-saving-and-loading-data)
- [Saving Multiple datas](#saving-multiple-datas)
- [Sorting in Numpy](#sorting-in-numpy)
- [More functions that are commonly used with Numpy](#more-functions-that-are-commonly-used-with-numpy)
- [Summary](#summary)


## Python's Numpy is capable of saving and loading data

Numpy is also capable of saving the any form of data as a seperate file and loading the data as well.

- [**numpy.save(file, arr, allow_pickle=True, fix_imports=(no value))**](https://numpy.org/doc/stable/reference/generated/numpy.save.html):
    - saves an array to a binary file in Numpy .npy format

- [**numpy.load(file, mmap_mode=None, allow_pickle=False, fix_imports=True, encoding='ASCII', *, max_header_size=10000)**](https://numpy.org/doc/stable/reference/generated/numpy.load.html):
    - loads arrays or pickled objects from .npy, .npz or pickled files

```python
import numpy as np

# create an array with 0-9
arr = np.arange(0,10)
# save the corresponding array to saved.npy
np.save('saved.npy', arr)

# load the corresponding data to res
res = np.load('saved.npy')
print(res)
```

Output:
```
[0 1 2 3 4 5 6 7 8 9]
```

## Saving Multiple datas

Numpy is capable of saving multiple data as well

- [**numpy.savez(file, *args, allow_pickle=True, **kwds)**](https://numpy.org/doc/stable/reference/generated/numpy.savez.html):
    - saves several arrays into a single file in uncompressed .npz format

```python
arr1 = np.arange(0, 10)
arr2 = np.arange(10, 20)
np.savez('saved.npz', arr1=arr1, arr2=arr2)

data = np.load('saved.npz')
res1 = data['arr1']
res2 = data['arr2']
print("res1\n", res1)
print("res2\n", res2)
```

Output:
```
res1
 [0 1 2 3 4 5 6 7 8 9]
res2
 [10 11 12 13 14 15 16 17 18 19]
```

## Sorting in Numpy

- [**numpy.sort(a, axis=-1, kind=None, order=None, *, stable=None)**](https://numpy.org/doc/stable/reference/generated/numpy.sort.html):
    - returns a sorted copy of an array

```python
# sorting smallest to biggest
arr = np.array([5, 9, 10, 3, 1])
arr.sort()
print("arr\n", arr)

# sorting biggest to smallest
arr = np.array([5, 9, 10, 3, 1])
arr.sort()
print("arr\n", arr[::-1])

# sorting 2d array by column
arr = np.array([[5, 9, 10, 3, 1], [8, 3, 4, 2, 5]])
arr.sort(axis=0)
print("arr\n", arr)

# sorting 2d array by row
arr = np.array([[5, 9, 10, 3, 1], [8, 3, 4, 2, 5]])
arr.sort(axis=1)
print("arr\n", arr)
```

Output:
```
arr
 [ 1  3  5  9 10]
arr
 [10  9  5  3  1]
arr
 [[ 5  3  4  2  1]
 [ 8  9 10  3  5]]
arr
 [[ 1  3  5  9 10]
 [ 2  3  4  5  8]]
```

## More functions that are commonly used with Numpy

- [**numpy.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None, axis=0, *, device=None)**](https://numpy.org/doc/stable/reference/generated/numpy.linspace.html):
    - returns evenly spaced numbers over a specified interval

- [**numpy.random.seed(seed=None)**](https://numpy.org/doc/stable/reference/random/generated/numpy.random.seed.html):
    - reseed the singleton RandomState instance

- [**numpy.copy(a, order='K', subok=False)**](https://numpy.org/doc/stable/reference/generated/numpy.copy.html):
    - returns an array copy of the given object

- [**numpy.unique(ar, return_index=False, return_inverse=False, return_counts=False, axis=None, *, equal_nan=True)**](https://numpy.org/doc/stable/reference/generated/numpy.unique.html):
    - finds the unique elements of an array then returns the sorted unique elements of an array.

```python
# create an array for 5 elements from 0 to 10 evenly spaced
arr = np.linspace(0, 10, 5)
print("arr\n", arr)

# random with seed allows us to reenact
np.random.seed(7)
print("random seed (7)\n", np.random.randint(0, 10, (2,3)))

# copying array, it doesn't affect by the changes made to the original array
arr1 = np.arange(0, 10)
arr2 = arr1.copy()
print("arr2\n", arr2)

# removes repeated elements
arr = np.array([1, 1, 2, 3, 3, 3, 1])
print("np.unique\n", np.unique(arr))
```

Output:
```
arr
 [ 0.   2.5  5.   7.5 10. ]
random seed (7)
 [[4 9 6]
 [3 3 7]]
arr2
 [0 1 2 3 4 5 6 7 8 9]
np.unique
 [1 2 3]
```

## Summary

- **numpy.save**: saves an array to a binary file in Numpy .npy format

- **numpy.load**: loads arrays or pickled objects from .npy, .npz or pickled files

- **numpy.savez**: saves several arrays into a single file in uncompressed .npz format

- **numpy.sort**: returns a sorted copy of an array

- **numpy.linspace**: returns evenly spaced numbers over a specified interval

- **numpy.random.seed**: reseed the singleton RandomState instance

- **numpy.copy**: returns an array copy of the given object

- **numpy.unique**: finds the unique elements of an array then returns the sorted unique elements of an array.