# What is data structure?

A **Data Structure** is a way of organizing, storing, and managing data in a computer so that it can be accessed, modified, and processed efficiently.

## Explanation
Data structures help programmers handle large amounts of data in an organized manner. By using proper data structures, operations like searching, inserting, deleting, and updating data can be performed efficiently.

## Examples of Data Structures
- Array
- Linked List
- Stack
- Queue
- Tree
- Graph

## Conclusion
In simple terms, a **data structure is a technique used to store and organize data so that it can be used effectively by programs and algorithms.**

<br><br>

# Expalin an Abstract Data Type with suitable example.

## 1. Introduction

An **Abstract Data Type (ADT)** is a logical or mathematical model of a data structure that defines:

- **What data is stored**
- **What operations can be performed on the data**
- **Without specifying how the operations are implemented**

It focuses on *behavior*, not *implementation*.

---

## 2. Definition

An **Abstract Data Type (ADT)** is a data type that is defined by its **operations and behavior**, rather than by its implementation details.

In simple words:

> ADT tells **what to do**, not **how to do it**.

---

## 3. Example: Stack as an ADT

A **Stack** is a linear data structure that follows the **LIFO (Last In First Out)** principle.

### Stack ADT Specification

### Data:
- Collection of elements

### Operations:
1. `push(x)` → Insert element at the top  
2. `pop()` → Remove top element  
3. `peek()` → View top element  
4. `isEmpty()` → Check if stack is empty  

---

### Important Point

Stack ADT does NOT specify:
- Whether it is implemented using an array
- Or using a linked list

That is implementation detail.

---

## 4. Why ADT is Important

- Provides data abstraction
- Hides implementation details
- Makes programs modular
- Makes code easier to modify and maintain

---

## 5. Conclusion

An **Abstract Data Type (ADT)** defines a data structure by its operations and behavior without defining how those operations are implemented.

Example: **Stack ADT** defines `push`, `pop`, and `peek` operations, but does not specify whether it uses an array or linked list internally.

<br><br>

# What is singly linked list ? Write an algorithm to add a node at the beginning and end of singly linked list.

# Singly Linked List

A **Singly Linked List** is a linear data structure in which each node contains:
1. Data
2. A pointer to the next node

Each node points to the next node and the last node points to NULL.

Structure:
[Data | Next] → [Data | Next] → NULL

---

## Algorithm to Insert at Beginning

INSERT_BEGIN(START, ITEM)

1. Create NEW node
2. NEW → data = ITEM
3. NEW → next = START
4. START = NEW
5. Return START

---

## Algorithm to Insert at End

INSERT_END(START, ITEM)

1. Create NEW node
2. NEW → data = ITEM
3. NEW → next = NULL
4. If START = NULL
      START = NEW
   Else
      PTR = START
      While PTR → next ≠ NULL
            PTR = PTR → next
      PTR → next = NEW
5. Return START

<br><br>

# Define circular queue. Write an algorithm to insert an item in a circluar queue.


A **Circular Queue** is a linear data structure in which the last position is connected back to the first position to form a circle.

It follows **FIFO (First In First Out)** principle.  
In circular queue, when `REAR` reaches the last position, it moves to the first position if space is available.

---

## Algorithm: INSERT_CQ (Insertion in Circular Queue)

Let:
- `CQ[MAX]` be the array
- `FRONT`, `REAR` be pointers

### INSERT_CQ(CQ, FRONT, REAR, ITEM)

1. If (FRONT == 0 AND REAR == MAX-1) OR (FRONT == REAR + 1)
      Print "Overflow"
      Exit

2. If FRONT == -1
      FRONT = 0
      REAR = 0
   Else If REAR == MAX-1
      REAR = 0
   Else
      REAR = REAR + 1

3. CQ[REAR] = ITEM

4. Return FRONT, REAR


<br><br>

# Difference between circular and linear queue.


| Basis | Linear Queue | Circular Queue |
|-------|--------------|----------------|
| Structure | Follows a straight line structure | Last position is connected to first (circular form) |
| Memory Utilization | Wastage of space may occur after deletion | Efficient use of memory |
| Rear Movement | Rear moves only forward | Rear can move to the beginning after reaching end |
| Condition of Full Queue | Rear = MAX - 1 | (FRONT = 0 AND REAR = MAX-1) OR (FRONT = REAR + 1) |
| Implementation | Simple to implement | Slightly more complex than linear queue |

---

## Conclusion

A linear queue may waste memory space, while a circular queue efficiently utilizes memory by reusing empty positions.

<br><br>

# How can we implement stack using linked list ? Explain.

A **Stack** is a linear data structure that follows the **LIFO (Last In First Out)** principle.

When implementing a stack using a **linked list**, we use a pointer called `TOP` that always points to the first node of the linked list.

Insertion and deletion are done at the beginning of the list.

---

## Representation

Each node contains:
- `data`
- `next` pointer

`TOP` → [Data | Next] → [Data | Next] → NULL

---

## PUSH Operation (Insert)

### Algorithm: PUSH(TOP, ITEM)

1. Create a new node `NEW`
2. If `NEW = NULL`
      Print "Overflow"
      Exit
3. Set `NEW → data = ITEM`
4. Set `NEW → next = TOP`
5. Set `TOP = NEW`
6. Return TOP

---

## POP Operation (Delete)

### Algorithm: POP(TOP)

1. If `TOP = NULL`
      Print "Underflow"
      Exit
2. Set `PTR = TOP`
3. Set `TOP = TOP → next`
4. Free PTR
5. Return TOP

---

## Conclusion

In linked list implementation of stack:
- `PUSH` inserts at the beginning
- `POP` deletes from the beginning
- No fixed size limit (depends on memory)

This method avoids overflow due to fixed array size and is suitable for dynamic memory usage.


<br><br>

# What is linear queue? Why do we need circular queue? Explain Queue traversal

A **Linear Queue** is a linear data structure that follows the **FIFO (First In First Out)** principle.

Insertion is done from the **REAR** end and deletion is done from the **FRONT** end.

Condition:
- Queue is Full → `REAR = MAX - 1`
- Queue is Empty → `FRONT = -1` or `FRONT > REAR`

---

# Why Do We Need Circular Queue?

In a linear queue, after several deletions, empty spaces are created at the beginning.  
Even if space is available, insertion is not possible when `REAR = MAX - 1`.

This causes **wastage of memory**.

To solve this problem, we use a **Circular Queue**, where:
- The last position connects back to the first.
- Empty spaces are reused.
- Memory is efficiently utilized.

---

# Queue Traversal

Traversal means displaying all elements of the queue from **FRONT to REAR**.

## Algorithm: TRAVERSE(QUEUE, FRONT, REAR)

1. If `FRONT = -1`
      Print "Queue is Empty"
      Exit
2. Set `PTR = FRONT`
3. While `PTR ≤ REAR`
      Print `QUEUE[PTR]`
      PTR = PTR + 1

---

## Conclusion

- Linear queue follows FIFO but wastes memory.
- Circular queue solves memory wastage problem.
- Traversal prints elements from FRONT to REAR.


<br><br>

# What is stack? List the application of the stack. Write an algorithm to perfrom PUSH and POP operation in stack.

A **Stack** is a linear data structure that follows the **LIFO (Last In First Out)** principle.

Insertion and deletion are performed only at one end called **TOP**.

---

## Applications of Stack

1. Expression evaluation (Postfix, Prefix)
2. Infix to Postfix conversion
3. Function calls (Recursion / Call Stack)
4. Parenthesis checking
5. Undo/Redo operations
6. Backtracking (e.g., maze solving)

---

# Algorithm for PUSH Operation

Let `STACK[MAX]` be an array and `TOP` be the pointer.

### PUSH(STACK, TOP, ITEM)

1. If `TOP = MAX - 1`
      Print "Overflow"
      Exit
2. `TOP = TOP + 1`
3. `STACK[TOP] = ITEM`
4. Return TOP

---

# Algorithm for POP Operation

### POP(STACK, TOP)

1. If `TOP = -1`
      Print "Underflow"
      Exit
2. `ITEM = STACK[TOP]`
3. `TOP = TOP - 1`
4. Return ITEM, TOP

---

## Conclusion

A stack follows LIFO principle.  
`PUSH` inserts an element at the TOP, and `POP` removes the element from the TOP.



<br><br>

# Write an algorithms and translate the following infix expression into its equivalent postfix expression using algorithm : ((A-(B+C))*D)$(E+F)

# Infix to Postfix Conversion

## Algorithm: INFIX_TO_POSTFIX(EXP)

1. Create an empty stack `S`
2. Create an empty postfix string `POST`
3. Scan the infix expression from left to right
4. If operand → Add to `POST`
5. If '(' → Push into stack
6. If ')' → Pop from stack and add to `POST` until '(' is removed
7. If operator:
      While stack is not empty AND
      precedence(top of stack) ≥ precedence(current operator)
            Pop from stack and add to `POST`
      Push current operator into stack
8. After scanning complete expression,
      Pop all remaining operators from stack into `POST`
9. Return `POST`

---

## Given Expression

((A-(B+C))*D)$(E+F)

---

## Step-by-Step Conversion

| Scan | Stack | Postfix |
|------|--------|----------|
| ( | ( | |
| ( | (( | |
| A | (( | A |
| - | ((- | A |
| ( | ((-( | A |
| B | ((-( | AB |
| + | ((-(+ | AB |
| C | ((-(+ | ABC |
| ) | ((- | ABC+ |
| ) | ( | ABC+- |
| * | (* | ABC+- |
| D | (* | ABC+-D |
| ) |  | ABC+-D* |
| $ | $ | ABC+-D* |
| ( | $( | ABC+-D* |
| E | $( | ABC+-D*E |
| + | $(+ | ABC+-D*E |
| F | $(+ | ABC+-D*EF |
| ) | $ | ABC+-D*EF+ |

Pop remaining operator:

Final Postfix Expression:

ABC+-D*EF+$

---

## Final Answer

The postfix form of  
((A-(B+C))*D)$(E+F)  

is:

ABC+-D*EF+$



<br><br>
<hr><hr>

## Short note:  Operator Precedence

| Operator | Precedence | Associativity |
|----------|------------|---------------|
| $        | 3          | Right         |
| * , /    | 2          | Left          |
| + , -    | 1          | Left          |
| ( )      | Highest    | —             |

---