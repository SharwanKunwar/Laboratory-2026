# 📘 Abstraction in Java (Complete Documentation)

## 🔹 What is Abstraction?

**Abstraction** is an Object-Oriented Programming (OOP) concept that focuses on **hiding implementation details** and **showing only essential features** to the user.

👉 It answers the question:
> **“What an object does” instead of “How it does it.”**

---

## 🔹 Real-World Example

- Using an **ATM**:
    - You know **what** it does (withdraw, deposit, check balance)
    - You don’t know **how** it works internally

This is **abstraction**.

---

## 🔹 Why Abstraction is Needed?

- 🔒 Hides complex implementation
- 🧠 Reduces programming complexity
- 🔄 Improves code reusability
- 🛠 Improves maintainability
- 🚀 Supports loose coupling

---

## 🔹 How Abstraction is Achieved in Java?

Java provides **two ways** to achieve abstraction:

1. **Abstract Class**
2. **Interface**

---

# 1️⃣ Abstract Class

## 🔹 What is an Abstract Class?

- A class declared using the `abstract` keyword
- Can contain:
    - Abstract methods (without body)
    - Concrete methods (with body)
- Cannot be instantiated

---

## 🔹 Syntax

```java
abstract class ClassName {
    abstract void method1(); // abstract method

    void method2() {
        // concrete method
    }
}
```

## 🔹 Example: Abstract Class
```java
abstract class BankAccount {

    abstract void calculateInterest();

    void deposit() {
        System.out.println("Money deposited");
    }
}
```
### Child Class
```java
class SavingAccount extends BankAccount {

    @Override
    void calculateInterest() {
        System.out.println("Interest is 5%");
    }
}
```
### Main Class
```java
public class Main {
    public static void main(String[] args) {
        BankAccount account = new SavingAccount();
        account.deposit();
        account.calculateInterest();
    }
}
```
## 🔹 Key Points of Abstract Class
* Can have constructors
* Can have instance variables
* Supports partial abstraction
* Supports single inheritance only



## 2️⃣ Interface
### 🔹 What is an Interface?
A blueprint of a class
Contains:
Abstract methods
Default and static methods (Java 8+)
Provides full abstraction (conceptually)


### 🔹 Syntax
```java
interface InterfaceName {
    void method1();
}
```

### 🔹 Example: Interface
```java
interface Payment {
    void pay();
}
```
### Implementation Class
```java
class EsewaPayment implements Payment {

    @Override
    public void pay() {
        System.out.println("Payment via Esewa");
    }
}
```

### Main Class
```java
public class Main {
    public static void main(String[] args) {
        Payment p = new EsewaPayment();
        p.pay();
    }
}
```
## 🔹 Key Points of Interface
* Cannot have constructors
* Variables are public static final by default
* Methods are public abstract by default 
* Supports multiple inheritance

# 🔥 Abstract Class vs Interface

| Feature              | Abstract Class             | Interface                  |
| -------------------- | -------------------------- | -------------------------- |
| Keyword              | abstract                   | interface                  |
| Methods              | Abstract + Concrete        | Abstract (default allowed) |
| Variables            | Instance variables allowed | Only constants             |
| Constructors         | Allowed                    | ❌ Not allowed              |
| Multiple inheritance | ❌ Not allowed              | ✅ Allowed                  |
| Abstraction level    | Partial                    | Full                       |


# 🔹 Abstraction vs Encapsulation

| Abstraction                     | Encapsulation                            |
| ------------------------------- | ---------------------------------------- |
| Focuses on what an object does  | Focuses on how data is protected         |
| Design level                    | Implementation level                     |
| Uses abstract class & interface | Uses private variables + getters/setters |


## 🔹 Interview Questions & Answers 
1. ❓ Can we create an object of an abstract class?
   * ❌ No, but we can create a reference of it.
2. ❓ Can abstract class have constructors?
   * ✅ Yes
3. ❓ Can abstract class have non-abstract methods?
   * ✅ Yes
4. ❓ Why interfaces support multiple inheritance?
   * Because interfaces avoid ambiguity by not providing implementation.
5. ❓ Is abstraction achieved at compile time or runtime?
   * Both (design-time abstraction, runtime polymorphism).


## 🔹 One-Line Definition (Exam Ready)
Abstraction is the process of hiding implementation details and exposing only essential functionalities using abstract classes and interfaces.


# 🧠 Summary

Abstraction improves security, flexibility, and maintainability
Achieved using abstract classes and interfaces
Widely used in real-world frameworks like Spring, Android, and APIs