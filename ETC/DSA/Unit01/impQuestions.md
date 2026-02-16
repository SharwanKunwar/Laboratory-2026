# 📘 Unit I: Introduction to Data Structure

---

## 🔹 1. Define Data Structure. Explain its Importance.

### ✅ Definition:
A **Data Structure** is a way of organizing, storing, and managing data in a computer so that it can be accessed and modified efficiently.

### ✅ Importance:
- Helps in efficient data management  
- Improves algorithm performance  
- Saves memory  
- Makes searching and sorting faster  
- Used in real-world applications (Database, OS, Compiler, etc.)

👉 Without proper data structures, programs become slow and inefficient.

---

## 🔹 2. What is Abstract Data Type (ADT)? Explain with Example.

### ✅ Definition:
An **Abstract Data Type (ADT)** is a logical model of a data structure that defines:
- What operations can be performed
- What type of data is stored

It does **not** specify how operations are implemented.

👉 ADT focuses on *what to do*, not *how to do*.

---

### ✅ Example: Stack ADT

**Operations:**
- push()
- pop()
- peek()
- isEmpty()

**Implementation can be done using:**
- Array
- Linked List

User does not need to know implementation details.

---

### 📊 ADT Diagram

      Stack (ADT)
    ----------------
    |  push()      |
    |  pop()       |
    |  peek()      |
    |  isEmpty()   |
    ----------------
           |
    ----------------
    | Implementation |
    | Array / Linked |
    ----------------

---

## 🔹 3. Differences

### 📌 Data Type vs ADT

| Data Type | ADT |
|------------|------|
| Predefined (int, float, char) | User-defined logical model |
| Defines data only | Defines data + operations |
| Implementation is fixed | Implementation is hidden |
| Example: int | Example: Stack, Queue |

---

### 📌 Linear vs Non-linear Data Structure

| Linear | Non-linear |
|--------|------------|
| Elements arranged sequentially | Elements arranged hierarchically |
| Single level | Multiple levels |
| Easy traversal | Complex traversal |
| Example: Array, Linked List | Example: Tree, Graph |

---

### 📌 Static vs Dynamic Data Structure

| Static | Dynamic |
|--------|----------|
| Size fixed at compile time | Size changes at runtime |
| Memory allocated once | Memory allocated dynamically |
| Example: Array | Example: Linked List |

---

## 🔹 4. Classification of Data Structures (With Diagram)

```
             Data Structure
                  |
    --------------------------------
    |                              |
Primitive                    Non-Primitive
(int, char) |------------------| Linear Non-Linear(Array, (Tree,Stack) Graph)

```


### ✅ Explanation:

### 1️⃣ Primitive Data Structure
- Basic data types
- int, float, char

### 2️⃣ Non-Primitive Data Structure
- Derived from primitive types
- Divided into:
  - Linear
  - Non-linear

---

## 🔹 5. Why Are Data Structures Important in Algorithm Design?

- Improve time complexity  
- Improve space complexity  
- Make code efficient  
- Help solve complex problems  
- Required for optimization  

👉 Good data structure + Good algorithm = Efficient system

---

## 🎯 Exam Tips

- Always write definition first  
- Draw diagram for ADT  
- Write 4–5 key points  
- Give examples  

---
