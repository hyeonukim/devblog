---
title: Algorithm Analysis (4) - Merge Sort
description: Explanation for Merge Sort algorithm, its implementation in multiple programming languages, and its time complexity characteristics.
date: 2024-12-04
categories: [Algorithm Analysis, Sorting]
tags: [Algorithm Analysis, Merge Sort, Sorting, Study, Python, C#, C++]
math: true
---

## Goal
[- Understanding Merge Sort](#understanding-merge-sort)

[- Coding Merge Sort](#coding-merge-sort)

[- Merge Sort's Time Complexity](#merge-sorts-time-complexity)

[- Merge Sort's characteristics](#merge-sorts-characteristics)

## Understanding Merge Sort

Similar to [Quick Sort](https://hyeonukim.github.io/devblog/posts/Quick-Sort/), Merge Sort also uses a divide and conquer method. The main idea of Merge Sort is to **divide the array into two halves, sort each half, and then merge the two halves back together**. This process is repeated until the entire array is sorted.

Here's a small run down of Merge Sort. If you want to look at code first then click [here](#coding-merge-sort).
```
    5 9 3 1 2 8 4 7 6
         /           \
    5 9 3 1 2       8 4 7 6
        / \           / \
   5 9 3   1 2      8 4  7 6
    / \    / \      / \   / \
  5 9  3   1   2   8   4  7  6
 / \      
5   9
 \ /  /     \ /     \ /    \ /
 5 9  3     1 2     4 8    6 7
   \ /      \ /      \ /     \ /
   3 5 9     1 2     4 8     6 7
        \ /              \ /   
      1 2 3 5 9         4 6 7 8
                  \ /
            1 2 3 4 5 6 7 8 9
```

## Coding Merge Sort

### Python
```python
array = [5, 9, 3, 1, 2, 8, 4, 7, 6]

def merge_sort(array):
    if len(array) <= 1:
        return array
    mid = len(array) // 2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])
    return merge(left, right)   

def merge(left, right):
    result = []
    while len(left) > 0 and len(right) > 0:
        if left[0] < right[0]:
            result.append(left.pop(0))
        else:
            result.append(right.pop(0))
```
### C#
```csharp
int[] array = { 5, 9, 3, 1, 2, 8, 4, 7, 6 };

int[] MergeSort(int[] array)
{
    if (array.Length <= 1)
        return array;
    int mid = array.Length / 2;
    int[] left = MergeSort(array.Take(mid).ToArray());
    int[] right = MergeSort(array.Skip(mid).ToArray());
    return Merge(left, right);
}

int[] Merge(int[] left, int[] right)
{
    List<int> result = new List<int>();
    while (left.Length > 0 && right.Length > 0)
    {
        if (left[0] < right[0])
            result.Add(left.First());
        else
            result.Add(right.First());
    }       
}
```

### C++
```cpp
void Merge(vector<int>& array, int left, int mid, int right){
    int n1 = mid - left + 1;
    int n2 = right - mid;
    vector<int> L(n1), R(n2);

    for (int i = 0; i < n1; i++)
        L[i] = array[left + i];
    for (int j = 0; j < n2; j++)
        R[j] = array[mid + 1 + j];

    int i = 0, j = 0, k = left;
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
            array[k++] = L[i++];
        else
            array[k++] = R[j++];
    }

    while (i < n1)
        array[k++] = L[i++];
    while (j < n2)
        array[k++] = R[j++];
}    

void MergeSort(vector<int>& array, int left, int right)
{
    if (left < right)
    {
        return;
    }
    int mid = left + (right - left) / 2;
    MergeSort(array, left, mid);
    MergeSort(array, mid + 1, right);
    Merge(array, left, mid, right);
}
```

## Merge Sort's Time Complexity

Merge Sort's time complexity is $O(n log n)$. This is because the array is divided into two halves recursively, and the merging process takes $O(n)$ time.

## Merge Sort's characteristics

Merge Sort is a stable sort, meaning that it preserves the relative order of equal elements. It is also a divide and conquer algorithm, which makes it efficient for sorting large datasets. However, Merge Sort requires additional memory for the merge process, which can be a problem for large datasets.