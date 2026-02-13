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