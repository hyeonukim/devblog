---
title: Algorithm Analysis (1) - Selection Sort
author: Hyeonu(Eric) Kim
date: 2024-10-15
categories: [Algorithm Analysis]
tags: [Algorithm Analysis, Selection Sort, Sorting, Study, Python, C#, C++]
---

## Goal
[- Understanding Selection Sort](#understanding-selection-sort)

[- Coding Selection Sort](#coding-selection-sort)

[- Selection Sort's characteristics](#selection-sorts-characteristics)

[- Selection Sort's Time Complexity](#selection-sorts-time-complexity)

## Understanding Selection Sort
Selection Sort is one of many sorting algorithms that can sort data. Say that we want to sort array in **ascending order**, then key idea with Selection Sort is that we're looking for **minimum value**, and gradually **swapping them with the i-th element of the array**. Here's a simple array and we're going to use Selection Sort to sort this array.

    Beginning of the array: 
    | 5 | 7 | 8 | 3 | 9 |

    Looking for minimum value from 1st element:
    | 5 | 7 | 8 | 3 | 9 |
      ^                        Min value: 5
    | 5 | 7 | 8 | 3 | 9 |
          ^                    Min value: 5
    | 5 | 7 | 8 | 3 | 9 |
              ^                Min value: 5
    | 5 | 7 | 8 | 3 | 9 |
                  ^            Min value: 3    
    | 5 | 7 | 8 | 3 | 9 |
                      ^        Min value: 3
    
    Swapping minimum value and 1st element:
    | 3 | 7 | 8 | 5 | 9 |

    Looking for minimum value from 2st element (Since we've alread "sorted" 1st element):
    | 3 | 7 | 8 | 5 | 9 |
          ^                    Min value: 7
    | 3 | 7 | 8 | 5 | 9 |
              ^                Min value: 7
    | 3 | 7 | 8 | 5 | 9 |
                  ^            Min value: 5    
    | 3 | 7 | 8 | 5 | 9 |
                      ^        Min value: 5

    Swapping minimum value and 2nd element:
    | 3 | 5 | 8 | 7 | 9 |

    Looking for minimum value from 3rd element:
    | 3 | 5 | 8 | 7 | 9 |
              ^                Min value: 8
    | 3 | 5 | 8 | 7 | 9 |
                  ^            Min value: 7    
    | 3 | 5 | 8 | 7 | 9 |
                      ^        Min value: 7
    
    Swapping minimum value and 3rd element:
    | 3 | 5 | 7 | 8 | 9 |

    Looking for minimum value from 4th element:
    | 3 | 5 | 7 | 8 | 9 |
                  ^            Min value: 8
    | 3 | 5 | 7 | 8 | 9 |
                      ^        Min value: 8

    Swapping minimum value and 4th element (Since we don't need to, keep it):
    | 3 | 5 | 7 | 8 | 9 |

    Final Array:
    | 3 | 5 | 7 | 8 | 9 |



## Coding Selection Sort

### Python

```python
#array   : array that we're trying to sort
#n       : length of array
def SelectionSort(array, n):
    for i in range(n):
        min_index = i #minimum value's index

        for j in range(i+1, n):
            if array[j] < array[min_index]:
                min_index = j
        array[i], array[min_index] = array[min_index], array[i] #swap min value with i-th element
```

### C++
```c++

#include <iostream>
using namespace std;

//array   : array that we're trying to sort
//n       : length of array
void SelectionSort(int array[], int n) {
    for (int i = 0; i < n; i++) {
        int min_index = i; //minimum value's index

        for (int j = i + 1; j < n; j++) {
            if (array[j] < array[min_index]) {
                min_index = j;
            }
        }
        // Swap the found minimum element with the i-th element
        int temp = array[i];
        array[i] = array[min_index];
        array[min_index] = temp;
    }
}
```

### C#
```c#
//array   : array that we're trying to sort
//n       : length of array
void SelectionSort(int[] array, int n) {
        for (int i = 0; i < n; i++) {
            int min_index = i;

            for (int j = i + 1; j < n; j++) {
                if (array[j] < array[min_index]) {
                    min_index = j;
                }
            }
            // Swap the found minimum element with the i-th element
            int temp = array[i];
            array[i] = array[min_index];
            array[min_index] = temp;
        }
}
```

## Selection Sort's characteristics

**Advantage**  
- No additional temporary storage is required other than the original list.
- Easy to implement.

**Disadvantage**  
- Poor efficiency regarding time complexity when dealing with big arrays.

## Selection Sort's Time Complexity
To calculate the Time Complexity of Selection Sort,

- How many times are data being compared to find min-value
    - First loop: (n-1)
    - Second loop: (n-2)
    - ...
    - N-1 loop: 2
    - N-th loop: 1

- How many times are we swapping the data
    -Swapping is done in O(1)

Thus, we have

**T(n) = (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2 = O(n^2)**
