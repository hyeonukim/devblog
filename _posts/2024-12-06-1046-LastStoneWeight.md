---
title: 1046. Last Stone Weight
description: Explanation for Leetcode 1046 - Last Stone Weight problem, and its solution in Python.
date: 2024-12-06
categories: [Leetcode, Heap/Priority Queue, Easy]
tags: [Leetcode, Python, Study, Heap/Priority Queue, Easy]
math: true
---

## Problem
[Leetcode 1046 - Last Stone Weight](https://leetcode.com/problems/last-stone-weight/description/)

Example:

```
Input: stones = [2,7,4,1,8,1]
Output: 1

Input: stones = [1]
Output: 1
```

## Approach

We can use a max heap to solve this problem. We will push all the stones in the heap, and then we will pop the two largest stones, and push the difference back into the heap. We will continue this process until there is only one stone left in the heap.

However, python does not have a max heap, so we will use a min heap and multiply the values by -1 to simulate a max heap.

Visualization of the approach:
```
[2,7,4,1,8,1]
[-2,-7,-4,-1,-8,-1] after times -1
[-8,-7,-4,-2,-1,-1] after heapify

x = -8, y = -7
[-4,-2,-1,-1,-1] after push (x-y)

x = -4, y = -2
[-2,-1,-1,-1] after push (x-y)

x = -2, y = -1
[-1,-1,-1] after push (x-y)

x = -1, y = -1
[-1, 0] after push (x-y)

x = -1, y = 0
[-1] after push (x-y)

Thus, the last stone weight is 1.
```

Here is the implementation of the approach:
```python
import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        stones = [-stone for stone in stones]
        heapq.heapify(stones)

        while len(stones) > 1:
            x = heapq.heappop(stones)
            y = heapq.heappop(stones)
            
            if y > x:
                heapq.heappush(stones, x - y)
    
        return -stones[0] if stones else 0
```

## Time Complexity and Space Complexity

Time Complexity: $O(n * log(n))$ since we are pushing and popping the heap n times.

Space Complexity: $O(n)$ since we are maintaining a heap of size n.
