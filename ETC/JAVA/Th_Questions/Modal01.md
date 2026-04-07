## 1. Define Java and Explain Its Features
Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems (now owned by Oracle).

### Features of Java

* Platform Independent
    Java follows “Write Once, Run Anywhere” using bytecode.
* Object-Oriented
    Everything is based on classes and objects.
* Simple
    Easy to learn, syntax similar to C/C++ but simpler.
* Secure
    No direct memory access, uses bytecode verification.
* Robust
    Strong memory management and exception handling.
* Multithreaded
    Supports multiple tasks simultaneously.
* Portable
    Can run on any platform with JVM.


<br><br>

## 2. What is JVM? Explain Its Role
JVM (Java Virtual Machine) is an abstract machine that provides a runtime environment to execute Java bytecode.

### Role in Java Execution
* Converts bytecode into machine code.
* Ensures platform independence.
* Manages memory (Heap, Stack).
* Provides security through bytecode verification.
* Handles garbage collection.

<br><br>

## 3. Define Tokens in Java with Examples
Tokens are the smallest individual units in a Java program.

### Types with Examples
* Keywords → int, class, public
* Identifiers → num, main, Student
* Literals → 10, "Hello", true
* Operators → +, -, *, /
* Separators → ;, {}, ()

<br><br>

## 4. Difference Between Method Overloading and Method Overriding
| Feature     | Method Overloading                                 | Method Overriding                 |
| ----------- | -------------------------------------------------- | --------------------------------- |
| Definition  | Same method name, different parameters             | Same method in subclass           |
| Parameters  | Must be different                                  | Must be same                      |
| Inheritance | Not required                                       | Required                          |
| Return Type | Can be same/different                              | Must be same                      |
| Example     | `add(int a, int b)` and `add(int a, int b, int c)` | Subclass redefining parent method |

<br><br>

## 5. What is Inheritance? Types of Inheritance in Java
Inheritance is a mechanism where one class acquires properties and behavior of another class.

### Types of Inheritance
* Single Inheritance
    One class inherits another.
* Multilevel Inheritance
    A class inherits from a derived class.
* Hierarchical Inheritance
    Multiple classes inherit from one parent.
* Multiple Inheritance (via Interfaces)
    A class can implement multiple interfaces.