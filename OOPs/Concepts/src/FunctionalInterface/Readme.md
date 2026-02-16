# 📘 Functional Interface, Lambda Expression & Method Reference in Java

## 🧩 1️⃣ Functional Interface

### 📖 Definition
A **Functional Interface** is an interface that contains **only one abstract method**.

It can contain:
- One abstract method (mandatory)
- Multiple default methods
- Multiple static methods

Java provides the `@FunctionalInterface` annotation to restrict it to one abstract method.

---

### 💻 Example

```java
@FunctionalInterface
interface MyFunctionalInterface {
    void sayHello();   // Single abstract method
}
```

## ⚡ 2️⃣ Lambda Expression
### 📖 Definition

A Lambda Expression provides a clear and concise way to implement a functional interface.

It replaces anonymous classes and reduces boilerplate code.
```java
(parameters) -> { body }
```

## 💻 Without Lambda (Anonymous Class)
```java
class Test {
public static void main(String[] args) {

        MyFunctionalInterface obj = new MyFunctionalInterface() {
            @Override
            public void sayHello() {
                System.out.println("Hello from Anonymous Class");
            }
        };

        obj.sayHello();
    }
}
```

## 💻 With Lambda
```java
class Test {
    public static void main(String[] args) {

        MyFunctionalInterface obj = () -> 
            System.out.println("Hello from Lambda Expression");

        obj.sayHello();
    }
}

```

## 🔁 3️⃣ Method Reference

### 📖 Definition

A Method Reference is a shorthand way of writing a lambda expression when the lambda simply calls an existing method.

It uses the :: operator.

### 🔹 Types of Method References
* Static Method Reference
* Instance Method Reference
* Constructor Reference


  ## 💻 Example
```java
@FunctionalInterface
interface Printer {
    void print(String message);
}

class Demo {

    public static void display(String message) {
        System.out.println(message);
    }

    public static void main(String[] args) {

        // Lambda Expression
        Printer p1 = (msg) -> Demo.display(msg);
        p1.print("Using Lambda");

        // Method Reference
        Printer p2 = Demo::display;
        p2.print("Using Method Reference");
    }
}
```

## 🧠 Key Differences
| Feature     | Lambda Expression    | Method Reference        |
| ----------- | -------------------- | ----------------------- |
| Syntax      | `(args) -> method()` | `ClassName::methodName` |
| Code Length | Short                | Shorter                 |
| Readability | Good                 | Cleaner                 |
| Usage       | Custom logic         | Direct method call      |

### 🚀 Why Use Them?
* ✔ Cleaner Code
* ✔ Less Boilerplate
* ✔ Improved Readability
* ✔ Used in Streams API
* ✔ Supports Functional Programming Style


### 📌 Conclusion
* Functional Interface → Contains one abstract method
* Lambda Expression → Short implementation of functional interface 
* Method Reference → Even shorter form when calling existing methods