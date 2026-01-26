# Object-Oriented Programming (OOP) Practice Notes

**Learner:** Sharwan Jung Kunwar
**Language:** Java
**Coverage:** Day 03

---

## 📘 Day 03 — `this` Keyword

### 🔹 What is `this`?

* `this` refers to the **current object**.
* Each object has its own `this` reference.

---

## 🔑 Uses of `this`

### 1️⃣ Referring to Instance Variables

Used when parameter names and instance variable names are the same.

✔ Example concept:

* `this.name` → instance variable
* `name` → parameter

---

### 2️⃣ Calling Current Class Method

* `this.methodName()`
* Optional but improves clarity.

---

### 3️⃣ Constructor Chaining (`this()`)

* Used to call another constructor of the same class.
* Helps avoid code duplication.

📌 Rules:

* Must be **first line** in constructor.
* Only one constructor call allowed.

---

### 4️⃣ Passing Current Object as Argument

* `method(this)`
* Common in frameworks and callbacks.

---

### ❌ When NOT to Use `this`

* Inside static methods (no object exists).
* When there is no ambiguity.

---

### 🔹 Static vs `this`

* Static → belongs to class
* `this` → belongs to object

---

### 🔹 Interview-Level Takeaway

> `this` resolves ambiguity and represents the object currently in execution.

---
📌 *Next Topic:* **Day 04 — Encapsulation (private, getters & setters)**
