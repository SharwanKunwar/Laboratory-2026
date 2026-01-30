# 📘 Polymorphism in Java (Complete Documentation)

## 🔹 What is Polymorphism?

**Polymorphism** is an Object-Oriented Programming (OOP) concept that allows **one action to behave differently in different situations**.

👉 The word *Polymorphism* comes from:
- **Poly** → Many
- **Morph** → Forms

> **One method, many forms**

---

## 🔹 Real-World Example

- A person can have different roles:
    - Student
    - Teacher
    - Employee

Same person, different behaviors → **Polymorphism**

---

## 🔹 Why Polymorphism is Needed?

- 🔄 Improves code flexibility
- 🔁 Enables method reusability
- 🧩 Reduces code complexity
- 🔧 Makes systems easily extensible
- 🚀 Supports dynamic method execution

---

## 🔹 Types of Polymorphism in Java

Java supports **two types** of polymorphism:

1. **Compile-Time Polymorphism** (Method Overloading)
2. **Runtime Polymorphism** (Method Overriding)

---

# 1️⃣ Compile-Time Polymorphism (Method Overloading)

## 🔹 What is Method Overloading?

When **multiple methods have the same name** but **different parameter lists** within the same class, it is called **method overloading**.

✔ Happens at **compile time**

---

## 🔹 Rules of Method Overloading

- Method name must be same
- Parameters must be different (type / number / order)
- Return type alone is NOT enough

---

## 🔹 Example: Method Overloading

```java
class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
}
```

## 🔹 Advantages of Method Overloading
* Improves code readability
* Same method name for similar tasks
* Cleaner and understandable code

## 2️⃣ Runtime Polymorphism (Method Overriding)
### 🔹 What is Method Overriding?
When a child class provides its own implementation of a method already defined in the parent class, it is called method overriding.

* ✔ Happens at runtime
* ✔ Achieved using inheritance

## 🔹 Rules of Method Overriding
* Method name must be same
* Parameters must be same
* IS-A relationship must exist
* Cannot reduce access level
* Static methods cannot be overridden

## 🔹 Example: Method Overriding
### Parent Class
```java
class BankAccount {
    void calculateInterest() {
        System.out.println("General bank interest");
    }
}
```

### Child Class
```java
class SavingAccount extends BankAccount {

    @Override
    void calculateInterest() {
        System.out.println("Saving account interest is 5%");
    }
}
```
### Main Class
```java
public class Main {
    public static void main(String[] args) {
        BankAccount account = new SavingAccount();
        account.calculateInterest();
    }
}
```
### 🔹 Output

    Saving account interest is 5%

## 🔹 Key Point (Important)
    Method call depends on the object, not the reference type

## 🔥 Compile-Time vs Runtime Polymorphism

| Feature              | Compile-Time       | Runtime           |
| -------------------- | ------------------ | ----------------- |
| Also called          | Method Overloading | Method Overriding |
| Binding time         | Compile time       | Runtime           |
| Inheritance required | ❌ No               | ✅ Yes             |
| Method signature     | Different          | Same              |
| Performance          | Faster             | Slightly slower   |

## 🔹 Polymorphism with Parent Reference

```java
BankAccount acc = new SavingAccount();
acc.calculateInterest();
```

    ✔ Parent reference
    ✔ Child object
    ✔ Runtime method execution


## 🔹 Polymorphism vs Abstraction
| Polymorphism               | Abstraction                                |
| -------------------------- | ------------------------------------------ |
| One method, many behaviors | Hides implementation details               |
| Behavior-focused           | Design-focused                             |
| Achieved via overriding    | Achieved via abstract classes & interfaces |


## 🔹 Interview Questions & Answers 
1. ❓ Can constructors be polymorphic?
    * ❌ No, constructors cannot be overridden.
2. ❓ Can static methods be polymorphic?
   * ❌ No, static methods are resolved at compile time.
3. ❓ What is dynamic method dispatch?
   * Runtime selection of overridden method.
4. ❓ Why runtime polymorphism is important?
   * It allows flexible and extensible systems.


## 🔹 One-Line Definition (Exam Ready)
Polymorphism allows a single method to perform different actions based on the object at runtime or parameters at compile time.

## 🧠 Summary
* Polymorphism improves flexibility and scalability
* Java supports compile-time and runtime polymorphism 
* Runtime polymorphism is achieved using inheritance and method overriding
* Widely used in real-world frameworks and APIs