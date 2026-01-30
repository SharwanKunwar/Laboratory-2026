# 🧠 Interview-Oriented Questions: Class and Object (Java)

---

<br>

## 1️⃣ What is a Class?

✅ **A class is a blueprint or template used to create objects.**

### Explanation:
- Defines **properties (variables)** and **behaviors (methods)**
- Memory is **not allocated** when a class is created

### Example:
```java
class Student {
    int id;
    String name;

    void study() {
        System.out.println("Student is studying");
    }
}
```

### Interview Line:
    A class is a logical entity that describes




## 2️⃣ What is an Object?

✅ An object is a real-world instance of a class.

### Explanation:
* Memory is allocated at runtime
* Objects represent real entities

### Example:

```java
Student s1 = new Student();
```
### **Interview Line:**
    An object is a physical entity created from a class.

## 3️⃣ Difference between Class and Object?

| Class                | Object                    |
| -------------------- | ------------------------- |
| Blueprint            | Instance                  |
| Logical entity       | Physical entity           |
| No memory allocation | Memory allocated          |
| Defined once         | Can be created many times |


### Interview Line:
    A class defines properties, an object represents them.


## 4️⃣ How many ways can we create an object in Java?

### ✅ Five common ways
* Using new keyword
* Using Class.forName()
* Using clone()
* Using newInstance() (Reflection)
* Using Deserialization

### Example:

```java
Student s = new Student();
```

### Interview Line:
    The most commonly used way is the new keyword.


## 5️⃣ What is a Constructor?

### ✅ A constructor is a special method used to initialize objects.

#### Key Points:
* Same name as class
* No return type
* Called automatically during object creation

### Example:

```java
class Student {
    Student() {
        System.out.println("Object created");
    }
}
```

### Interview Line:
    Constructors initialize the state of an object.


## 6️⃣ Can a class exist without an object?
### ✅ Yes

### Explanation:
* Static members belong to the class
* main() method runs without object creation
### Example:

```java
class Test {
    static void show() {
        System.out.println("Static method");
    }
}
```

### Interview Line:
    Static members allow class-level access without objects.

## 7️⃣ Can we create an object without using the new keyword?
✅ Yes
### Explanation:
    By using reflection, cloning, or deserialization


### Interview Line:
    Java allows object creation without new using advanced techniques.


## 8️⃣ What happens when an object is created?
### Steps:
* Memory allocation
* Instance variables initialization
* Constructor execution

### Interview Line:
    Object creation involves memory allocation and constructor invocation.

## 9️⃣ Can a class have multiple objects?
### ✅ Yes
### Explanation:
    A single class can create multiple objects with different states

### Example:
```java
Student s1 = new Student();
Student s2 = new Student();
```

### Interview Line:
    Multiple objects can be created from a single class.


## 🔟 Can an object exist without a class?
### ❌ No
### Explanation:
    Every object must belong to a class

### Interview Line:
    An object is always an instance of a class.


## 🏁 One-Shot Interview Summary

* Class is a blueprint
* Object is an instance
* Objects occupy memory, classes do not
* Multiple objects can be created from one class
* Constructors initialize objects