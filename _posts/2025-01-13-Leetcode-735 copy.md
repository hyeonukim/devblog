---
title: Leetcode 901. Online Stock Span
description: Explanation for Leetcode 901 - Online Stock Span, and its solution in Python.
date: 2025-01-13
categories: [Leetcode, Stack, Medium]
tags: [Leetcode, Python, Study, Stack, Medium]
math: true
---

## Problem
[Leetcode 901 - Online Stock Span](https://leetcode.com/problems/online-stock-span/description/)

Example:
```
Input
["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
[[], [100], [80], [60], [70], [60], [75], [85]]
Output
[null, 1, 1, 1, 2, 1, 4, 6]

Explanation
StockSpanner stockSpanner = new StockSpanner();
stockSpanner.next(100); // return 1
stockSpanner.next(80);  // return 1
stockSpanner.next(60);  // return 1
stockSpanner.next(70);  // return 2
stockSpanner.next(60);  // return 1
stockSpanner.next(75);  // return 4, because the last 4 prices (including today's price of 75) were less than or equal to today's price.
stockSpanner.next(85);  // return 6
```

## Approach

We can have a stack that tracks (price, count) where price is the price of stock, and count is total amount of prices that were lower or equal to price before that day

When we encounter a new stock price
- while stack exists, and stack[-1][0] <= price
    - increment the count by how much last element had because if the price is lower than current day, then all the count should still be lower than current day
    - pop the stack
- append today's price and count
- return count

Visualization of the Approach:
```
prices = [100, 80, 60, 70, 60, 75, 85]
stack = []

Since there's no element in stack add it to the list with count = 1
stack = [(100, 1)]
returns 1

Since the last element in stack's price is higher than current day, count = 1
stack = [(100, 1), (80, 1)]
returns 1

Since the last element in stack's price is higher than current day, count = 1
stack = [(100, 1), (80, 1), (60, 1)]
returns 1

Since the last element in stack's price is LOWER than current day, count = 1 + 1, and update stack
stack = [(100, 1), (80, 1), (70, 2)]
returns 2

Since the last element in stack's price is higher than current day, count = 1
stack = [(100, 1), (80, 1), (70, 2), (60, 1)]
returns 1

Since the last element in stack's price is LOWER than current day, count = 1 + 1 + 2, and update stack
stack = [(100, 1), (80, 1), (75, 4)]
returns 4

Since the last element in stack's price is LOWER than current day, count = 1 + 4 + 1, and update stack
stack = [(100, 1), (85, 6)]
returns 6
```

Here is the Python code for the solution:
```python
class StockSpanner:
    def __init__(self):
        self.stack = []
    
    def next(self, price: int) -> int:
        count = 1
        while self.stack and self.stack[-1][0] <= price:
            count += self.stack[-1][1]
            self.stack.pop()
        
        self.stack.append((price, count))
        return count
```
## Time Complexity and Space Complexity

Time Complexity: $O(n)$

Space Complexity: $O(n)$