# Unit 2: The Stack (3 Hours)

This README provides a structured overview of **Stack** concepts, including definitions, operations, applications in expression evaluation, and conversion techniques. The content is divided into three sections based on hours for easier revision.

---

## 🕐 Hour 1: Introduction to Stack + Stack as ADT + PUSH & POP

### 1️⃣ Definition of Stack
A **Stack** is a linear data structure that follows the **LIFO (Last In First Out)** principle.  
> Last element inserted is the first element removed.

**Example:**  
- Stack of plates  
- Undo/Redo in applications  
- Browser back button  

---

### 2️⃣ Stack as ADT
An **Abstract Data Type (ADT)** defines the behavior (operations) of a stack without specifying its implementation.

**Stack Operations:**
- `push(x)` → Insert element at top  
- `pop()` → Remove top element  
- `peek()` → View top element  
- `isEmpty()` → Check if empty  
- `isFull()` → Check if full

**Implementation:**  
- Array  
- Linked List  

---

### 3️⃣ PUSH Operation
Adds an element to the top of the stack.

**Algorithm:**
```text
IF top == MAX-1
    PRINT "Overflow"
ELSE
    top = top + 1
    stack[top] = element
```

    Stack before push: 10, 20
    Push 30
    Stack after push: 10, 20, 30


### 4️⃣ POP Operation
Removes the top element from the stack.

    IF top == -1
        PRINT "Underflow"
    ELSE
        element = stack[top]
        top = top - 1
        RETURN 
        
**Example** 

    Stack before pop: 10, 20, 30
    After pop: 10, 20




## 🕑 Hour 2: Stack Applications – Expression Evaluation

### 1️⃣ Infix Expression

* Operator placed between operands
* Example: A + B, 5 + 3
* Requires parentheses and precedence rules

### 2️⃣ Postfix Expression (Reverse Polish Notation)
* Operator comes after operands
* Example: AB+, 53+
#### Evaluation Algorithm:
1. Scan left → right
2. If operand → push
3. If operator → pop two operands → compute → push result

## Example:

    Expression: 5 3 +
    Stack: push 5, push 3, pop 5 and 3, compute 5+3=8, push 8
    Result: 8



### 3️⃣ Prefix Expression (Polish Notation)
* Operator comes before operands
* Example: +AB, +53
#### Evaluation Algorithm:

* Scan right → left
* Operand → push
* Operator → pop two operands → compute → push result


<br>

## 🕒 Hour 3: Expression Conversion
### 1️⃣ Infix to Postfix Conversion

#### Rules:
1. Operand → add to output
2. '(' → push to stack
3. ')' → pop until '('
4. Operator → pop from stack until top has lower precedence, then push operator

#### Operator Precedence:
| Operator | Priority |
| -------- | -------- |
| ^        | Highest  |
| * /      | Medium   |
| + -      | Lowest   |


### Example:
    Infix: A + B * C
    Stepwise Conversion:

    Output: A
    Stack: +
    Output: AB
    Stack: + *
    Output: ABC
    Pop all operators
    Final Postfix: ABC*+



## ✅ Applications of Stack
* Expression Evaluation (Postfix, Prefix)
* Parenthesis Checking (Balanced Parentheses)
* Function Call Stack (Recursion)
* Undo/Redo Operations in Text Editors

<br>


        Stack
        ├── Basics
        │     ├── LIFO Principle
        │     ├── Operations (Push, Pop, Peek, isEmpty, isFull)
        │     └── Implementation (Array / Linked List)
        ├── Expression Evaluation
        │     ├── Infix
        │     ├── Postfix
        │     └── Prefix
        └── Expression Conversion
                ├── Infix → Postfix
                ├── Operator Precedence
                └── Stack Usage



### 🎯 Exam Tips
* Focus on Infix → Postfix conversion and Postfix evaluation
* Always include diagrams for Push/Pop
* Remember operator precedence table
* Practice numerical examples step-by-step