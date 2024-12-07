---
title: 703. Kth Largest Element in a Stream
description: Explanation for Leetcode 703 - Kth Largest Element in a Stream problem, and its solution in Python.
date: 2024-12-06
categories: [Leetcode, Heap/Priority Queue, Easy]
tags: [Leetcode, Python, Study, Heap/Priority Queue, Easy]
math: true
---

## Problem
[Leetcode 703 - Kth Largest Element in a Stream](https://leetcode.com/problems/kth-largest-element-in-a-stream/description/)

Example:

```
Input:
["KthLargest", "add", "add", "add", "add", "add"]
[[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]

Output:
[null, 4, 5, 5, 8, 8]

Explanation:
KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
kthLargest.add(3);   // return 4
kthLargest.add(5);   // return 5
kthLargest.add(10);  // return 5
kthLargest.add(9);   // return 8
kthLargest.add(4);   // return 8
```

## Approach

Since we are just looking for the kth largest element, we can use linked list to keep track of the k largest elements, or we can use a min heap to keep track of the k largest elements. 

Linked List: We can sort the array and add the elements to the linked list, and once we add the elements to the linked list, we can traverse the linked list to find the kth largest element.

Min Heap: We can use a min heap to keep track of the k largest elements, and once we add the elements to the min heap, we can find the kth largest element by popping the root of the heap. Since we are finding the kth largest element, we can maintain a heap of size k.

Visualization of the approach:
```
k = 3, nums = [4, 5, 8, 2]

nums turns into [4, 5, 8] after sorting, and since k = 3, we can maintain a size of 3 heap.
add(3)
nums: [3, 4, 5, 8] -> [4, 5, 8]
return 4

add(5)
nums: [4, 5, 5, 8] -> [5, 5, 8]
return 5

add(10)
nums: [5, 8, 10] -> [8, 10]
return 5

add(9)
nums: [8, 9, 10] -> [8, 9, 10]
return 8

add(4)
nums: [4, 8, 9, 10] -> [8, 9, 10]
return 8
```

### Linked List
```python
## Node and LinkedList class
class Node:
    def __init__(self, val: int):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

## KthLargest class
class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.LL = LinkedList()
        
        # If the list is empty, we don't need to do anything
        if len(nums) == 0:
            return
        
        # Add the first element to the linked list
        self.LL.head = Node(nums[0])
        curr = self.LL.head
        # Add rest of the elements to the linked list
        for num in nums[1:]:
            curr.next = Node(num)
            curr = curr.next

    def add(self, val: int) -> int:
        curr = self.LL.head
        newNode = Node(val)

        # If the linked list is empty, we just add the new node to the head
        if not curr:
            self.LL.head = newNode
        # If the new node is greater than the head, we make it the new head
        elif curr.val < val:
            newNode.next = curr 
            self.LL.head = newNode
        # If the new node is less than the head, we traverse the linked list to find the correct position
        else:
            while curr.next:
                if curr.next.val < val:
                    temp = curr.next
                    curr.next = newNode
                    curr.next.next = temp
                    break
                curr = curr.next
        # Once we iterate through the linked list, we add the new node to the end of the linked list
        if not curr.next:
            curr.next = newNode
    
        # We traverse the linked list to find the kth largest element
        index = 1
        curr = self.LL.head
        while index < self.k:
            curr = curr.next
            index += 1
        
        return curr.val
```

### Min Heap
```python
class KthLargest:
    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.minHeap = nums

        # Heapify the min heap
        heapq.heapify(self.minHeap)
        # If the heap size is greater than k, we pop the root of the heap
        while len(self.minHeap) > k:
            heapq.heappop(self.minHeap)

    def add(self, val: int) -> int:
        heapq.heappush(self.minHeap, val)
        # If the heap size is greater than k, we pop the root of the heap
        if len(self.minHeap) > self.k:
            heapq.heappop(self.minHeap)
        # Return the root of the heap
        return self.minHeap[0]
```

## Time Complexity and Space Complexity

Time Complexity: $O(m * log(k))$ since we are pushing and popping the heap m times.

Space Complexity: $O(k)$ since we are maintaining a heap of size k.
