---
title: Algorithm Analysis (3) - Quick Sort
date: 2024-10-16
categories: [Algorithm Analysis, Sorting]
tags: [Algorithm Analysis, Quick Sort, Sorting, Study, Python, C#, C++]
---

## Goal
[- Understanding Quick Sort](#understanding-quick-sort)

[- Coding Quick Sort](#coding-quick-sort)

[- Quick Sort's Time Complexity](#quick-sorts-time-complexity)

[- Quick Sort's characteristics](#quick-sorts-characteristics)

## Understanding Quick Sort
Unlike [Selection Sort](https://hyeonukim.github.io/devblog/posts/Selection-Sort/), and [Insertion Sort](https://hyeonukim.github.io/devblog/posts/Insertion-Sort/), Quick Sort is known to have good efficiency of time complexity being O(n log n) in average compared to O(n^2). What makes Quick Sort a such efficient algorithm compared to the others?

Here's a small run down of Quick Sort. Let's just pick a arbitrary element and call this a **pivot** from an array and then **sort all that is smaller than pivot to left, and bigger than pivot to right**. 

Once this is done, all the numbers that are smaller than our pivot should be on the left, and numbers that are bigger should be on the right. Then we do the **whole process again on the left side of pivot and right side of pivot**. This method is also known as **divide and conquer** as we're dividing the tasks and solving them. We're going to look at the code first then show an example on how this looks. If you want to look at example first then click [here](#run-down)

## Coding Quick Sort

### Python
```python
#array   : array that we're trying to sort
#start   : start position/index of array
#right   : end position/index of array
def Quick_Sort(array, start, end):
    if start >= end: #if there's only 1 element in array return
        return

    pivot = start #first element is pivot
    left = start + 1
    right = end
    #In this loop, we're looking for where pivot should be
    while left <= right:
        #while left hasn't reached end, and left's element is smaller, increment left position
        while left <= end and array[left] <= array[pivot]:
            left += 1
        #while  right hasn't reached start, and right's element is bigger, decrement right position
        while right > start and array[right] >= array[pivot]:
            right -= 1
        if left > right:
            array[right], array[pivot] = array[pivot], array[right]
        else:
            array[left], array[right] = array[right], array[left]
    
    #do quick sort on left block
    Quick_Sort(array, start, right-1)
    #do quick  sort on right block
    Quick_Sort(array, right+1, end)

```

### C++

```c++
#include <iostream>
#include <vector>
using namespace std;

// array   : array that we're trying to sort
// start   : start position/index of array
// end     : end position/index of array
void QuickSort(vector<int>& array, int start, int end)
{
    if (start >= end) // if there's only 1 element in array, return
        return;

    int pivot = start; // first element is pivot
    int left = start + 1;
    int right = end;

    // In this loop, we're looking for where pivot should be
    while (left <= right)
    {
        // while left hasn't reached end, and left's element is smaller, increment left position
        while (left <= end && array[left] <= array[pivot])
            left++;

        // while right hasn't reached start, and right's element is bigger, decrement right position
        while (right > start && array[right] >= array[pivot])
            right--;

        if (left > right)
            swap(array[right], array[pivot]); // swap pivot and right
        else
            swap(array[left], array[right]);  // swap left and right
    }

    // do quick sort on left block
    QuickSort(array, start, right - 1);
    // do quick sort on right block
    QuickSort(array, right + 1, end);
}
```

### C#
```c#
// array   : array that we're trying to sort
// start   : start position/index of array
// end     : end position/index of array
void QuickSort(int[] array, int start, int end)
{
    if (start >= end) // if there's only 1 element in array, return
        return;

    int pivot = start; // first element is pivot
    int left = start + 1;
    int right = end;

    // In this loop, we're looking for where pivot should be
    while (left <= right)
    {
        // while left hasn't reached end, and left's element is smaller, increment left position
        while (left <= end && array[left] <= array[pivot])
            left++;

        // while right hasn't reached start, and right's element is bigger, decrement right position
        while (right > start && array[right] >= array[pivot])
            right--;

        if (left > right)
            (array[right], array[pivot]) = (array[pivot], array[right]); // swap pivot and right
        else
            (array[left], array[right]) = (array[right], array[left]);   // swap left and right
    }

    // do quick sort on left block
    QuickSort(array, start, right - 1);
    // do quick sort on right block
    QuickSort(array, right + 1, end);
}
```

### Run Down

    Beginning of Array ( ' represents pivot):
    | 5 | 7 | 9 | 0 | 3 | 1 | 6 | 2 | 4 | 8 |
      '                                                    

    Step 1 ( ^ represents left, * represents right):
    | 5 | 7 | 9 | 0 | 3 | 1 | 6 | 2 | 4 | 8 |
      '   ^                               *             Since 7 is bigger, we stop moving left
                                                        Since 8 is bigger, we decrement right

    | 5 | 7 | 9 | 0 | 3 | 1 | 6 | 2 | 4 | 8 |
      '   ^                           *                 Since 4 is smaller than 5, we stop moving right
                                                        Swap the element of left and right
    
    | 5 | 4 | 9 | 0 | 3 | 1 | 6 | 2 | 7 | 8 |
      '   ^                               *             Since 4 is smaller, we increment left


    | 5 | 4 | 9 | 0 | 3 | 1 | 6 | 2 | 7 | 8 |
      '       ^                           *             Since 9 is bigger, we stop moving left
                                                        Since 7 is bigger, we decrement right

    | 5 | 4 | 9 | 0 | 3 | 1 | 6 | 2 | 7 | 8 |
      '       ^                       *                 Since 2 is smaller, we stop moving right
                                                        Swap the element of left and right

    | 5 | 4 | 2 | 0 | 3 | 1 | 6 | 9 | 7 | 8 |
      '                       ^       *                 Since 2, 0, 3, 1 are smaller we increment left
                                                        Since 6 is bigger, we stop moving left

    | 5 | 4 | 2 | 0 | 3 | 1 | 6 | 9 | 7 | 8 |
      '                   *   ^                         Since 7, 9, 6 are bigger we decrement right
                                                        Since 1 is smaller, we stop moving right

    | 1 | 4 | 2 | 0 | 3 | 5 | 6 | 9 | 7 | 8 |
      '                                                 Since left is bigger than right, we swap pivot and right

    As we can see from '5' all the left is smaller, and all the right is bigger

    We repeat this process for left block, and right block using the divide and conquer technique.

    Step 2 ( ^ represents left, * represents right) I will be skipping the descriptions
    Left block                                        Right block
    | 1 | 4 | 2 | 0 | 3 |           | 5 |             | 6 | 9 | 7 | 8 |
      '   ^           *                                 '   ^       *
    
    Left block                                        Right block
    | 1 | 4 | 2 | 0 | 3 |           | 5 |             | 6 | 9 | 7 | 8 |
      '   ^       *                                     '*  ^       

    Left block                                        Right block
    | 1 | 0 | 2 | 3 | 4 |           | 5 |             | 6 | 9 | 7 | 8 |
      '   ^       *                                     '*  ^       

    Left block                                        Right block
    | 1 | 0 | 2 | 3 | 4 |           | 5 |             | 6 | 9 | 7 | 8 |
      '   ^       *                                     '*  ^ 

    Left block                                        Right block
    | 1 | 0 | 2 | 3 | 4 |           | 5 |             | 6 | 9 | 7 | 8 |
      '   *   ^                                         '*  ^       

    Left block                                        Right block
    | 0 | 1 | 2 | 3 | 4 |           | 5 |             | 6 | 9 | 7 | 8 |

    We repeat this process until We're left with 1 element each on each block
    Then it's merged all together

    Final array:
    | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |

## Quick Sort's Time Complexity

The time complexity for Quick Sort is O(n log n).
>> Each partitioning divides the array to two parts, which sums up to log n operations, and since partitioning opertation takes O(n), we have total of O(n * log n).

However, in worst case it still takes O(n^2).
>> if pivot is always the smallest or largest element, this could happen.

## Quick Sort's characteristics

**Advantage**  
- No additional temporary storage is required other than the original list.
- It's efficient compared to Insertion Sort and Selection Sort as the time complexity is  O(n log n)

**Disadvantage**  
- In a worst case, It still has poor time complexity.
- Implemented with recursion, which could lead to stack overflow for very large datasets.