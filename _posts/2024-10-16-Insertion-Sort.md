---
title: Algorithm Analysis (2) - Insertion Sort
date: 2024-10-16
categories: [Algorithm Analysis, Sorting]
tags: [Algorithm Analysis, Insertion Sort, Sorting, Study, Python, C#, C++]
---

## Goal
[- Understanding Insertion Sort](#understanding-insertion-sort)

[- Coding Insertion Sort](#coding-insertion-sort)

[- Insertion Sort's Time Complexity](#insertion-sorts-time-complexity)

[- Insertion Sort's characteristics](#insertion-sorts-characteristics)

## Understanding Insertion Sort

This is another way of sorting data structure, and key idea is to **insert the element to appropriate place**. It is a bit more complicated to implement compared to [Selection Sort](https://hyeonukim.github.io/devblog/posts/Selection-Sort/), but Insertion Sort is a better method as time complexity to sort is more efficient.

>Why is it more efficient? Since Insertion Sort only compares data when needed, it is even more efficient when array is already somewhat sorted.

Let's see an example of how Insertion Sort works.

    Beginning of Array:
    | 5 | 7 | 8 | 3 | 9 |

    Step 1: We start at 2nd element of array, and we check if it should go to left of 5 or right of 5
    and since 7 is bigger than 5, we should leave 7 as it is.
    | 5 | 7 | 8 | 3 | 9 |
          ^

    Step 2: Again, here we don't need to swap since 8 should be coming after 7
    | 5 | 7 | 8 | 3 | 9 |
              ^

    Step 3: Here, we are checking where 3 should be placed from left of 5, 7, 8, right of 8 and since 3 is
    smaller than 5, it should be at left of 5
    | 5 | 7 | 8 | 3 | 9 |
                  ^

    Step 4: No insertion is needed here as 9 is bigger than 8
    | 3 | 5 | 7 | 8 | 9 |
                      ^
    
    Thus, we have a sorted array.


## Coding Insertion Sort

### Python
```python
#array  : array that we're trying to sort
#n      : length of array
def InsertionSort(array, n):
    for i in range(1, n):
        for j in range(i, 0, -1):
            if array[j] < array[j - 1]:
                # Swap elements
                array[j], array[j - 1] = array[j - 1], array[j]
            else: # Element is at its correct position
                break
```

### C++
```c++
#include <iostream>
using namespace std;

//array   : array that we're trying to sort
//n       : length of array
void InsertionSort(int array[], int n) {
    for (int i = 1; i < n; i++){
        for (int j = i; j > 0; j--){
            if (array[j] < array[j - 1]){
                // Swap elements
                int temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            } else{
                // Element is at its correct position
                break;
            }
        }
    }
}
```

### C#
```c#
void InsertionSort(int[] array, int n){
    for (int i = 1; i < n; i++){
        for (int j = i; j > 0; j--){
            if (array[j] < array[j - 1]){
                // Swap elements
                int temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            } else {
                // Element is at its correct position
                break;
            }
        }
    }
}
```

## Insertion Sort's Time Complexity

To calculate the Time Complexity of Insertion Sort,

Just like Selection Sort, it takes O(n^2) as in worst case, it has to swap 

**T(n) = (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2 = O(n^2)**

However, in best case scenario, we don't have to iterate the second for loop. 

Thus, in best case: **T(n) = 1 + 1 + ... + 1 + 1 = O(n)**

## Insertion Sort's characteristics

**Advantage**  
- No additional temporary storage is required other than the original list.
- In best canse the time complexity is O(n).

**Disadvantage**  
- In a worst case, It still has poor time complexity.