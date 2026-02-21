
# ✅ UNIT 02 (Stack – SAD)

## 1️⃣ Define Stack

A **Stack** is a linear data structure that follows:

> 🔹 **LIFO (Last In First Out)**

### Diagram
      TOP
       ↓
    | 30 |
    | 20 |
    | 10 |


👉 30 will be removed first.

---

## 2️⃣ Stack Operations

### 🔹 PUSH (Insert Operation)

Adds an element at the TOP.

### Algorithm: PUSH
    If TOP == MAX-1
    Print "Overflow"

    Else
    TOP = TOP + 1
    STACK[TOP] = ITEM



---

### 🔹 POP (Delete Operation)

Removes an element from the TOP.

### Algorithm: POP
    If TOP == -1
    Print "Underflow"

    Else
    ITEM = STACK[TOP]
    TOP = TOP - 1



---

## 3️⃣ Stack Applications in Expression Evaluation

Stack is used in:

- Infix → Postfix conversion  
- Infix → Prefix conversion  
- Postfix evaluation  
- Parenthesis checking  

---

## 4️⃣ Expression Conversion

### Example:
Infix: `A + B * C`

---

### 🔹 Infix → Postfix

Rules:
- Higher precedence operators first
- `*` and `/` have higher priority than `+` and `-`

Expression: A + B * C


Step:
- First solve B * C  
- Then add A  

👉 Postfix: `ABC*+`

---

### 🔹 Infix → Prefix

Expression: A + B * C


👉 Prefix: `+A*BC`

---

## 5️⃣ Evaluate Postfix Using Stack

### Example:
Postfix: `23*5+`

### Steps:
1. Push 2  
2. Push 3  
3. `*` → 2 × 3 = 6 → Push 6  
4. Push 5  
5. `+` → 6 + 5 = 11  

👉 Final Result = **11**

---

# 🔥 Quick Revision Summary

- Data Type = Type of data  
- Data Structure = Organization of data  
- Linear = Sequential structure  
- Non-linear = Hierarchical structure  
- Stack = LIFO  
- PUSH = Insert  
- POP = Delete  
- Used in expression evaluation  

---

✍️ Prepared for exam revision  
💻 Ready for GitHub upload  