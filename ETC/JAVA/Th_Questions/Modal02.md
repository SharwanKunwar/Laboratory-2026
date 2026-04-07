## 1. What are java buzzwords? write a java program to find simple interest . use command line argument to take input.
Java buzzwords are key features or characteristics that describe the capabilities and design goals of Java.

### Important Java Buzzwords
* Simple → Easy syntax, removes complex features like pointers
* Object-Oriented → Based on classes and objects
* Platform Independent → “Write Once, Run Anywhere”
* Secure → No direct memory access, bytecode verification
* Robust → Strong memory management and exception handling
* Multithreaded → Supports concurrent execution
* Portable → Can run on different platforms
* High Performance → Uses Just-In-Time (JIT) compiler
* Distributed → Supports network-based applications
* Dynamic → Can adapt to changing environments

```
Simple Interest = (Principal × Rate × Time) / 100
```

***Program Code***

```java
public class SimpleInterest {
    public static void main(String[] args) {

        // Check if enough arguments are passed
        if (args.length != 3) {
            System.out.println("Please provide Principal, Rate, and Time");
            return;
        }

        // Convert command line arguments to double
        double principal = Double.parseDouble(args[0]);
        double rate = Double.parseDouble(args[1]);
        double time = Double.parseDouble(args[2]);

        // Calculate Simple Interest
        double simpleInterest = (principal * rate * time) / 100;

        // Display result
        System.out.println("Simple Interest = " + simpleInterest);
    }
}
```

<br><br>

## 2. What are use of super keyword? Write a java program to create base class fruit which has name, test and size as its attributes and method called eat() which describe name and its test. Inherit the same in two other class Apple and orange and override the eat() method to represent each fruit taste.

The super keyword is used to refer to the immediate parent class object.

***Uses***
* ***Access Parent Class Variables***
    - Used when child class has same variable name as parent.
    - Example: super.name
* ***Call Parent Class Methods***
    - Used to invoke parent class method.
    - Example: super.eat()
* ***Invoke Parent Class Constructor***
    - Used to call constructor of parent class.
    - Example: super()

***Code***
```java
class Fruit {
    String name;
    String taste;
    String size;

    // Constructor
    Fruit(String name, String taste, String size) {
        this.name = name;
        this.taste = taste;
        this.size = size;
    }

    // Method
    void eat() {
        System.out.println("Fruit Name: " + name);
        System.out.println("Taste: " + taste);
    }
}

// Apple class
class Apple extends Fruit {

    Apple() {
        super("Apple", "Sweet", "Medium");
    }

    @Override
    void eat() {
        System.out.println("Apple tastes sweet and crispy.");
    }
}

// Orange class
class Orange extends Fruit {

    Orange() {
        super("Orange", "Citrus", "Medium");
    }

    @Override
    void eat() {
        System.out.println("Orange tastes tangy and juicy.");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {

        Apple a = new Apple();
        Orange o = new Orange();

        a.eat();
        o.eat();
    }
}
```

<br><br>

## 3. What is Difference between string and string buffer class? write a java program to identity the input string is palindrome or not ? 
| Feature           | String                                      | StringBuffer                         |
| ----------------- | ------------------------------------------- | ------------------------------------ |
| **Mutability**    | Immutable (cannot change)                   | Mutable (can change)                 |
| **Performance**   | Slower (creates new object on modification) | Faster (modifies same object)        |
| **Memory Usage**  | More memory (new objects created)           | Less memory (same object reused)     |
| **Thread Safety** | Not synchronized                            | Synchronized (thread-safe)           |
| **Example**       | `str = str + "abc"` creates new object      | `sb.append("abc")` modifies existing |

**example**
```java
String s = "Hello";
s = s + " World";  // new object created

StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");  // same object modified
```

***check Palindrome String***
```java
// Reverse the string
        for(int i = input.length() - 1; i >= 0; i--) {
            reversed = reversed + input.charAt(i);
        }
```