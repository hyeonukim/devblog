---
title: Algorithm Analysis (5) - Binary Search
description: Explanation for Binary Search algorithm, its implementation in multiple programming languages, and its time complexity characteristics.
date: 2024-12-04
categories: [Algorithm Analysis, Searching]
tags: [Algorithm Analysis, Binary Search, Searching, Study, Python, C#, C++]
math: true
---

## Goal

[- Understanding Binary Search](#understanding-binary-search)

[- Coding Binary Search](#coding-binary-search)

[- Binary Search's Time Complexity](#binary-searchs-time-complexity)

[- Binary Search's characteristics](#binary-searchs-characteristics)

## Understanding Binary Search

Binary Search is a searching algorithm that finds the position of a target value within a **sorted array**. It compares the target value to the middle element of the array, and if they are not equal, it eliminates half of the remaining elements by comparing the target value to the middle element of the remaining elements. This process is repeated until the target value is found or the array is empty.

Here's a small run down of Binary Search. If you want to look at code first then click [here](#coding-binary-search).
```
    1 2 3 4 5 6 7 8 9
    target = 7
    left = 0
    right = 8
    mid = (left + right) / 2 = (0 + 8) / 2 = 4
    array[mid] = array[4] = 5
    5 < 7

    left = mid + 1 = 4 + 1 = 5
    right = 8
    mid = (left + right) / 2 = (5 + 8) / 2 = 6
    array[mid] = array[6] = 7
    7 == 7

    return mid = 6
```

## Coding Binary Search

### Python
```python
def binary_search(array, target):
    left = 0
    right = len(array) - 1

    while left <= right:
        mid = (left + right) // 2
        if array[mid] == target:
            return mid
        elif array[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

### C#
```csharp
public static int BinarySearch(int[] array, int target)
{
    int left = 0;
    int right = array.Length - 1;

    while (left <= right)
    {
        int mid = (left + right) / 2;
        if (array[mid] == target)
        {
            return mid;
        }
        else if (array[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return -1;
}
``` 

### C++
```cpp

int binarySearch(int array[], int target)
{
    int left = 0;
    int right = sizeof(array) / sizeof(array[0]) - 1;

    while (left <= right)
    {
        int mid = (left + right) / 2;
        if (array[mid] == target)
        {
            return mid;
        }
        else if (array[mid] < target)
        {
            left = mid + 1;
        }
        else
        {
            right = mid - 1;
        }
    }
    return -1;
}
```

## Binary Search's Time Complexity

The time complexity of Binary Search is $O(log n)$. This is because the algorithm divides the search space in half at each step, effectively reducing the problem size by half.

## Binary Search's characteristics

Binary Search is efficient for searching in sorted arrays, but it requires the array to be sorted beforehand. If the array is not sorted, Binary Search cannot be applied.
