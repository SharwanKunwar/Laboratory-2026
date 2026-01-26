# Object-Oriented Programming (OOP) Practice Notes

**Learner:** Sharwan Jung Kunwar
**Language:** Java
**Coverage:** Day 02

---

## 📘 Day 02 — Constructors

### 🔹 What is a Constructor?

* Special method used to **initialize an object**.
* Same name as class.
* No return type.
* Automatically called when object is created.

---

### 🔹 Types of Constructors

#### 1️⃣ Default Constructor

* Takes no parameters.
* Sets default values.
* If no constructor is written, Java provides one automatically.

#### 2️⃣ Parameterized Constructor

* Accepts parameters.
* Used to initialize object with specific values.

---

### 🔹 Constructor Overloading

* A class can have **multiple constructors**.
* Allows creating objects in different ways.

---

### 🔹 Important Rules

* Constructor is **not static** because it initializes instance variables.
* Constructors are **not called manually**.
* If any constructor is defined, Java **does not provide** a default one.

---

### 🔹 Default Values Set by Constructor

* `int` → 0
* `double` → 0.0
* `boolean` → false
* `String / Object` → null

---

### 🔹 Interview-Level Takeaway

> Constructors guarantee that an object starts its life in a valid state.

---

