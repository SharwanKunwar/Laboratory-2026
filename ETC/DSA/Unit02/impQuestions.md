# 📘 Unit 02 – Stack (SAD)
## 5 Marks Important Questions – Exam Ready Notes

---

# 1️⃣ Define Stack. Explain its operations with diagram. (5 Marks)

A **Stack** is a linear data structure that follows the **LIFO (Last In First Out)** principle.  
The element inserted last is removed first.

## 🔹 Basic Operations:
- **PUSH** – Insert an element at the top
- **POP** – Remove an element from the top
- **PEEK/TOP** – View the top element

## 🔹 Diagram:
     TOP
      ↓
    | 30 |
    | 20 |
    | 10 |


If POP is performed, **30** will be removed first.

👉 Example: Stack of plates.

---

# 2️⃣ Explain PUSH and POP Operations with Algorithm. (5 Marks)

## 🔹 PUSH Operation (Insertion)

Adds an element to the top of the stack.

### Algorithm: PUSH(STACK, ITEM)
    If TOP == MAX - 1
    Print "Stack Overflow"

    Else
    TOP = TOP + 1
    STACK[TOP] = ITEM


---

## 🔹 POP Operation (Deletion)

Removes the top element from the stack.

### Algorithm: POP(STACK)
    If TOP == -1
    Print "Stack Underflow"

    Else
    ITEM = STACK[TOP]
    TOP = TOP - 1
    Return ITEM



---

# 3️⃣ Stack Applications in Expression Evaluation. (5 Marks)

Stack is used in:

- Infix → Postfix conversion
- Infix → Prefix conversion
- Postfix expression evaluation
- Checking balanced parentheses

## Example:

Infix: `A + B * C`  
Postfix: `ABC*+`

👉 Stack helps manage operator precedence and evaluation order.

---

# 4️⃣ Convert Infix to Postfix and Prefix. (5 Marks)

## Given Expression: A + B * C


## 🔹 Infix → Postfix

Rules:
- Follow operator precedence
- `*` has higher precedence than `+`

Step:
- First solve B * C
- Then add A

👉 **Postfix: ABC*+**

---

## 🔹 Infix → Prefix

👉 **Prefix: +A*BC**

---

# 5️⃣ Evaluate a Postfix Expression Using Stack. (5 Marks)

## Given: 23*5+


## Steps:
1. Push 2  
2. Push 3  
3. `*` → 2 × 3 = 6 → Push 6  
4. Push 5  
5. `+` → 6 + 5 = 11  

👉 **Final Result = 11**

---

# 🔥 Quick Revision

- Stack follows **LIFO**
- PUSH → Insert
- POP → Delete
- Used in expression conversion & evaluation
- Handles operator precedence

---

