---
title: Data Structure (3) - LinkedList
description: This post is about LinkedList, its definition, operations, and applications.
date: 2024-12-03
categories: [Data Structure]
tags: [Data Structure, LinkedList, Python, C++, C#]
math: true
---

# Data Structure Series
[Data Structure Series](https://hyeonukim.github.io/devblog/categories/data-structure/)

## Topics

- [What is Node?](#what-is-node)
- [What is LinkedList?](#what-is-linkedlist)
- [Linked List Complexity](#linked-list-complexity)
- [Summary](#summary)

## What is Node?

Before we dive into the details of LinkedList, we need to understand what a node is. A node is a basic unit of a linked list that contains two parts: data and a pointer to the next node. You can think of a node as a box that contains two things: the data you want to store, and a pointer to the next node. Of course, in a node, you can store more than just one data and a pointer to the next node such as a pointer to the previous node. If a node has a pointer to the previous node, it is called a doubly linked list. If a node has no pointer to the previous node, it is called a singly linked list.

Here's a simple implementation of a node:

**Python**
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None # This is optional, and only used in doubly linked list
```

**C++**
```cpp
class Node {
    public:
        int data;
        Node* next;
        Node* prev; // This is optional, and only used in doubly linked list
};
``` 

**C#**
```csharp
class Node {
    public int data;
    public Node next;
    public Node prev; // This is optional, and only used in doubly linked list
}
``` 

## What is LinkedList?

Now that we understand what a node is, we can move on to understanding what a linked list is. A linked list is a linear data structure that consists of a sequence of nodes, where each node contains a data element and a pointer to the next node. The first node is called the head, and the last node is called the tail. The tail node points to a null value, indicating the end of the list.

Here's a visual representation of a linked list:
```
At first, the linked list is empty:

Head/Tail -> NULL

Say we have bunch of data we want to store in the linked list:

Head (1) -> Node(2) -> Node(3) -> Tail (4) -> NULL

We are just writing Head and Tail to indicate the start and end of the linked list. But they're still just nodes.
```

Here's a simple implementation of a linked list:

**Python**
```python
class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None # This is optional

# We can use this class to add or remove nodes from the linked list.
linked_list = LinkedList()

# We can add nodes to the linked list like this:
first = Node(1)
second = Node(2)
third = Node(3)

linked_list.head, linked_list.tail = first, third
linked_list.head.next = second
second.next = third
```

**C++**
```cpp
class LinkedList {
    public:
        Node* head;
        Node* tail;
};

// We can use this class to add or remove nodes from the linked list.
LinkedList linked_list = new LinkedList();

// We can add nodes to the linked list like this:
Node* first = new Node(1);
Node* second = new Node(2);
Node* third = new Node(3);

linked_list.head = first;
linked_list.tail = third;
linked_list.head->next = second;
second->next = third;
``` 

**C#**
```csharp
class LinkedList {
    public Node head;
    public Node tail;
}

// We can use this class to add or remove nodes from the linked list.
LinkedList linked_list = new LinkedList();

// We can add nodes to the linked list like this:
Node first = new Node(1);
Node second = new Node(2);
Node third = new Node(3);

linked_list.head = first;
linked_list.tail = third;
linked_list.head.next = second;
second.next = third;
```     

## Linked List Complexity

Just like arrays, linked list is capable of:
- Accessing the i-th element: $O(n)$
- Inserting a new element: $O(1)$
- Deleting an element: $O(n)$
- Deleting the last element: $O(1)$


## Summary

Linked list is a linear data structure that consists of a sequence of nodes, where each node contains a data element and a pointer to the next node. The first node is called the head, and the last node is called the tail. The tail node points to a null value, indicating the end of the list.
