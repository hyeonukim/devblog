---
title: Data Structure (2) - Stack, Queue
description: This post is about Stack, its definition, operations, and applications.
date: 2024-12-03
categories: [Data Structure]
tags: [Data Structure, Stack, Queue, Python, C++, C#]
math: true
---

# Data Structure Series
[Data Structure Series](https://hyeonukim.github.io/devblog/categories/data-structure/)


## Topics

- [What is Stack?](#what-is-stack)
- [What is Queue?](#what-is-queue)
- [Basic Operations](#basic-operations)
- [Summary](#summary)

## What is Stack?

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. It is a collection of elements that are stored in a linear order and can be accessed in a specific order. The most recent element added to the stack is the first one to be removed.

Here's an example of a stack:
```
Empty Stack: []
Push 1: [1]
Push 2: [1, 2]
Push 3: [1, 2, 3]
Pop: [1, 2]           //3 is removed following the LIFO principle
```

Push and Pop operations will be explained in the [Basic Operations](#basic-operations) section, but for now, you can think of Push as adding an element to the stack, and Pop as removing element from the stack.
As you can see, the most recent element(3) added to the stack is the first one to be removed, following the LIFO principle.

## What is Queue?

A queue is a linear data structure that follows the First In First Out (FIFO) principle. It is a collection of elements that are stored in a linear order and can be accessed in a specific order. The most recent element added to the queue is the first one to be removed.

Here's an example of a queue:
```
Empty Queue: []
Enqueue 1: [1]
Enqueue 2: [1, 2]
Enqueue 3: [1, 2, 3]
Dequeue: [2, 3]           //1 is removed following the FIFO principle
```

Enqueue and Dequeue operations will be explained in the [Basic Operations](#basic-operations) section, but for now, you can think of Enqueue as adding an element to the queue, and Dequeue as removing element from the queue.
As you can see, the most recent element(1) added to the queue is the first one to be removed, following the FIFO principle.

## Basic Operations

You may have been confused about what Push, Pop, Enqueue, and Dequeue mean from previous examples. Let's define them, and look at some other basic operations.

### Stack

- Push: Add an element to the stack 
- Pop: Remove the most recent element from the stack
- Top: Return the most recent element in the stack
- isEmpty: Check if the stack is empty

Here's a simple implementation of a stack:

**Python**
```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def top(self):
        return self.items[-1]

    def isEmpty(self):
        return len(self.items) == 0
```

**C++**
```cpp
class Stack {
    private:
        vector<int> items;
    public:
        void push(int item){
            items.push_back(item);
        }
        void pop(){
            items.pop_back();
        }
        int top(){
            return items.back();
        }
        bool isEmpty(){
            return items.empty();
        }
};
```

**C#**
```csharp
class Stack {
    private List<int> items;
    public void Push(int item){
        items.Add(item);
    }
    public void Pop(){
        items.RemoveAt(items.Count - 1);
    }
    public int Top(){
        return items[items.Count - 1];
    }
    public bool isEmpty(){
        return items.Count == 0;
    }
}
```

### Queue

- Enqueue: Add an element to the queue
- Dequeue: Remove the most recent element from the queue
- Front: Return the most recent element in the queue
- isEmpty: Check if the queue is empty

Here's a simple implementation of a queue:

**Python**
```python
class Queue:
    def __init__(self):
        self.items = [] 

    def enqueue(self, item):
        self.items.append(item) 

    def dequeue(self):
        return self.items.pop(0)        

    def front(self):
        return self.items[0]

    def isEmpty(self):
        return len(self.items) == 0 
``` 

**C++**
```cpp
class Queue {
    private:
        vector<int> items;
    public:
        void enqueue(int item){
            items.push_back(item);
        }
        void dequeue(){
            items.erase(items.begin());
        }
        int front(){
            return items.front();
        }
        bool isEmpty(){
            return items.empty();
        }
};      
``` 

**C#**
```csharp
class Queue {
    private List<int> items;
    public void Enqueue(int item){
        items.Add(item);
    }
    public void Dequeue(){
        items.RemoveAt(0);
    }
    public int Front(){
        return items[0];
    }
    public bool isEmpty(){
        return items.Count == 0;
    }
};                        
``` 

## Summary

Stack and Queue are both linear data structures that follow specific principles: LIFO for Stack and FIFO for Queue. They are commonly used in various programming problems, such as checking for balanced parentheses in a string or implementing undo/redo functionality in an editor.

The biggest difference between Stack and Queue is the order of elements: LIFO for Stack and FIFO for Queue.
