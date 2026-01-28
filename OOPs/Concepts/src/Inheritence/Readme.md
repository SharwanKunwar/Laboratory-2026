# 📘 Inheritance in Java (Interview-Level)

## 📌 What is Inheritance?
Inheritance is an Object-Oriented Programming (OOP) concept where **one class acquires the properties and behaviors of another class**.

- The class that is inherited from is called the **Parent / Superclass**
- The class that inherits is called the **Child / Subclass**

> **Inheritance represents an “IS-A” relationship.**

---

## 🎯 Why Inheritance is Important?
Inheritance is used to:
- Promote code reusability
- Reduce code duplication
- Improve maintainability
- Enable method overriding (runtime polymorphism)
- Establish hierarchical relationships between classes

---

## ⚙️ How Inheritance Works in Java
Inheritance in Java is implemented using the `extends` keyword.

### Syntax:
```java
class ChildClass extends ParentClass {
    // additional fields and methods
}
```
## Example

```java
class Animal {
    void eat() {
        System.out.println("Animal is eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Dog is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // inherited method
        d.bark();  // own method
    }
}
```

## 🧠 Explanation (Interview-Oriented)
* Dog inherits the eat() method from Animal
* Dog can use both:
  * Parent class methods
  * Its own methods
* This avoids rewriting the same code and improves clarity


## 🧬 Types of Inheritance in Java
Java supports the following inheritance types using classes:

| Type                      | Supported |
| ------------------------- | --------- |
| Single                    | ✅         |
| Multilevel                | ✅         |
| Hierarchical              | ✅         |
| Multiple (via classes)    | ❌         |
| Multiple (via interfaces) | ✅         |


## 📊 Types Explained with Example
### 1️⃣ Single Inheritance
```java
class A {}
class B extends A {}
```

### 2️⃣ Multilevel Inheritance

```java
class A {}
class B extends A {}
class C extends B {}
```
### 3️⃣ Hierarchical Inheritance
```java
class A {}
class B extends A {}
class C extends A {}
```

## ❓ Why Java Does Not Support Multiple Inheritance with Classes?

Java avoids multiple inheritance using classes to prevent ambiguity, also known as the Diamond Problem.
Instead, Java supports multiple inheritance through interfaces.


## 🔁 Method Overriding in Inheritance
Method overriding allows a child class to provide a specific implementation of a method already defined in the parent class.

Example:
```java
class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

## 🆚 Inheritance vs Composition (Interview Favorite)
| Inheritance       | Composition           |
| ----------------- | --------------------- |
| IS-A relationship | HAS-A relationship    |
| Tight coupling    | Loose coupling        |
| Less flexible     | More flexible         |
| Uses `extends`    | Uses object reference |

⚠️ Common Interview Mistakes

* ❌ Confusing inheritance with composition
* ❌ Overusing inheritance
* ❌ Forgetting super keyword
* ❌ Breaking encapsulation using protected fields

## 🔑 Important Keywords for Interviews

* extends
* super
* Method overriding
* IS-A relationship
* Code reusability


### 📌 One-Line Interview Answer

Inheritance is an OOP mechanism where a subclass acquires the properties and behaviors of a superclass using the extends keyword, enabling code reuse and method overriding.

## 🏁 Conclusion

Inheritance allows classes to reuse and extend existing functionality, forming a hierarchical class structure.
It is a powerful OOP feature when used correctly and plays a key role in polymorphism and clean design.