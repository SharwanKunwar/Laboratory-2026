## 1. What is Data Structure?

A **data structure** is a way to organize and store data so a computer can access and modify it efficiently.

## Types

### Linear
Data is arranged in a sequence:  
- Array  
- Linked List  
- Stack  
- Queue  

### Non-Linear
Data is arranged in a hierarchy or network:  
- Tree  
- Graph  

## Why It Matters
- Faster access  
- Efficient memory use  
- Simplifies problem-solving

## 2. Explain an Abstract Data Type with suitable example.

An **Abstract Data Type (ADT)** is a logical description of data and the operations that can be performed on it, without specifying how it is implemented.

## Example: Stack
- **Operations:**  
  - **Push:** Add an element to the top  
  - **Pop:** Remove the top element  
- **Behavior:** Last-In-First-Out (LIFO)  
- **Implementation:** Can be done using an array or linked list, but the ADT does not specify it.

```java
Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
System.out.println(stack.pop()); // Output: 20
```

## 3. What is singly linked list ? write an algorithm to add a node at the beginning and end of singly linked list.

# Singly Linked List

A **Singly Linked List (SLL)** is a linear data structure where each node contains **data** and a **pointer to the next node**. The last node points to `NULL`.  

## Add Node at the Beginning
**Algorithm:**
1. Create a new node.  
2. Set new node's `Next` to point to `Head`.  
3. Update `Head` to point to the new node.  

**Pseudocode:**

```java
function addAtBeginning(data):
newNode = createNode(data)
newNode.Next = Head
Head = newNode
```


## Add Node at the End
**Algorithm:**
1. Create a new node. Set `Next = NULL`.  
2. If list is empty, set `Head = newNode`.  
3. Otherwise, traverse to the last node.  
4. Set last node's `Next = newNode`.  

**Pseudocode:**

```java
function addAtEnd(data):
newNode = createNode(data)
newNode.Next = NULL
if Head == NULL:
Head = newNode
else:
temp = Head
while temp.Next != NULL:
temp = temp.Next
temp.Next = newNode
```

## 4. Define circular queue. Write an algorithm to insert an item in a circlear queue.

A **Circular Queue** is a linear data structure where the **last position is connected back to the first**, forming a circle.  
It overcomes the limitation of a simple queue where unused spaces appear after deletions.

## Insert an Item in Circular Queue

**Algorithm:**
1. Check if the queue is full:  
   - If `(rear + 1) % size == front`, queue is full.  
2. If the queue is empty:  
   - Set `front = 0` and `rear = 0`.  
   - Insert the item at `queue[rear]`.  
3. Otherwise:  
   - Update `rear = (rear + 1) % size`.  
   - Insert the item at `queue[rear]`.  

**Pseudocode:**

```java
function enqueue(item):
if (rear + 1) % size == front:
print("Queue is full")
else if front == -1: # Queue is empty
front = 0
rear = 0
queue[rear] = item
else:
rear = (rear + 1) % size
queue[rear] = item
```

## 5. Difference between circular and linear queue.

### Difference Between Circular Queue and Linear Queue

| Feature                  | Linear Queue                          | Circular Queue                       |
|---------------------------|---------------------------------------|-------------------------------------|
| Structure                 | Linear, ends at last position         | Last position connects to first (circle) |
| Memory Utilization        | Wastes space after deletions          | Efficient, reuses empty spaces      |
| Insertion/Deletion        | At rear/front only                     | At rear/front, wraps around          |
| Full Condition            | When `rear = size-1`                   | When `(rear + 1) % size = front`    |
| Complexity for operations | May need shifting for reuse           | No shifting needed                   |



## 6. How can we implement stack using linked list? explain.


A **stack** is a **Last-In-First-Out (LIFO)** data structure.  
It can be implemented using a **singly linked list**, where **insertion and deletion are done at the head**.

## Steps to Implement

1. **Node Structure:**  
   Each node contains `data` and `Next` pointer to the next node.  

2. **Push Operation (Insert at Top):**  
   - Create a new node.  
   - Set `newNode.Next = top`.  
   - Update `top = newNode`.  

3. **Pop Operation (Remove from Top):**  
   - If stack is empty, print "Underflow".  
   - Otherwise, set `top = top.Next` and delete the previous top node.  

## Pseudocode

**Push:**
```java
function push(data):
newNode = createNode(data)
newNode.Next = top
top = newNode
```

**Pop:**
```java
function pop():
if top == NULL:
print("Stack Underflow")
else:
temp = top
top = top.Next
delete temp
```

**Summary:**  
- **Top of stack** corresponds to the **head of the linked list**.  
- Stack operations are **dynamic** and **no fixed size limit** as in array implementation.

## 7. What is linear queue? why do we need circlular queue ? explain queue traversal.

## Linear Queue
A **Linear Queue** is a **FIFO (First-In-First-Out)** data structure where insertion is done at the **rear** and deletion at the **front**.  
- Limitation: After some deletions, empty spaces appear at the front, wasting memory.

## Why We Need Circular Queue
A **Circular Queue** connects the **rear back to the front**, forming a circle.  
- It **reuses empty spaces** created by deletions.  
- More **memory-efficient** than a linear queue.

## Queue Traversal
**Traversal** means visiting each element of the queue **from front to rear** without modifying the queue.  

**Algorithm:**
1. Start from `front`.  
2. Repeat until you reach `rear`:  
   - Access the element at current position.  
   - Move to the next position `(i + 1) % size`.  

**Pseudocode:**
```java
function traverseQueue():
if front == -1:
print("Queue is empty")
else:
i = front
while i != rear:
print(queue[i])
i = (i + 1) % size
print(queue[rear])
```

## 8. What is stack ? List the application of the stack. Write an algorithm to perform PUSH and POP operation in stack.


A **Stack** is a **linear data structure** that follows **LIFO (Last-In-First-Out)** principle, where insertion and deletion are done at the **top** only.

## Applications of Stack
- Expression evaluation (infix, postfix, prefix)  
- Function call management (call stack)  
- Undo/Redo operations in editors  
- Syntax parsing in compilers  
- Browser back/forward navigation  

## Algorithm for Push Operation
**Steps:**
1. Check if stack is full (overflow).  
2. If not, create a new node or increment top.  
3. Insert the new element at the top.  

**Pseudocode:**
```java
function push(stack, item):
if top == size - 1:
print("Stack Overflow")
else:
top = top + 1
stack[top] = item
```


## Algorithm for Pop Operation
**Steps:**
1. Check if stack is empty (underflow).  
2. If not, remove the element from the top.  
3. Decrement top.  

**Pseudocode:**
```java
function pop(stack):
if top == -1:
print("Stack Underflow")
else:
item = stack[top]
top = top - 1
return item
```