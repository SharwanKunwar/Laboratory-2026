# 📘 Encapsulation in Java (Interview-Level)

## 📌 What is Encapsulation?
Encapsulation is an Object-Oriented Programming (OOP) principle that **bundles data (variables) and behavior (methods) into a single unit (class)** and **restricts direct access to the internal state of an object**.

> **Encapsulation focuses on data protection and controlled access.**

---

## ❓ Why is Encapsulation Important? (Interview Point)
Encapsulation is important because it:
- Protects object integrity
- Prevents unauthorized or invalid data modification
- Promotes loose coupling
- Improves maintainability and scalability
- Enables controlled exposure of internal logic

---

## ⚙️ How is Encapsulation Implemented in Java?
Encapsulation in Java is achieved using:
- **Access modifiers** (`private`, `public`, `protected`)
- **Getter and Setter methods**

### Core Rules:
- Instance variables → `private`
- Access methods → `public`

---

## 💻 Example: Encapsulation in Java

```java
class Person {
    private String name;
    private int age;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        if (age > 0) { // validation logic
            this.age = age;
        }
    }

    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("Sharwan");
        p.setAge(20);

        System.out.println(p.getName());
        System.out.println(p.getAge());
    }
}

```
## 🧠 Explanation (Interview-Oriented)

* Fields are declared private to prevent direct modification.
* Public setter methods allow validation logic before assigning values.
* Getter methods provide read-only access where required.
* This design ensures data consistency and security.

## 🔐 Data Hiding vs Encapsulation
| Data Hiding                   | Encapsulation                      |
| ----------------------------- | ---------------------------------- |
| Focuses on restricting access | Focuses on wrapping data + methods |
| Achieved using `private`      | Achieved using class design        |
| Part of encapsulation         | Broader OOP concept                |

## 🎯 Real-World Use Case

### Bank Account

* balance → private

* Access via:
  * deposit()
  * withdraw()
  * getBalance()

This prevents invalid operations like setting balance directly.

## ⚠️ Common Interview Traps

* ❌ Making variables public
* ❌ Providing setters without validation
* ❌ Confusing encapsulation with abstraction
* ❌ Exposing internal implementation details

## 🆚 Encapsulation vs Abstraction (Quick Comparison)
| Encapsulation          | Abstraction                      |
| ---------------------- | -------------------------------- |
| How data is protected  | What data is exposed             |
| Focuses on data safety | Focuses on design                |
| Uses access modifiers  | Uses interfaces/abstract classes |

## ✅ Advantages (Interview Keywords)
* Security
* Validation control
* Maintainability
* Loose coupling
* Flexibility

### 📌 One-Line Interview Answer

Encapsulation is the process of wrapping data and methods into a class and restricting direct access to data using access modifiers while providing controlled access through public methods.

## 🏁 Conclusion

Encapsulation ensures that an object controls how its data is accessed and modified.
It is a foundational OOP concept that improves security, maintainability, and robustness of Java applications.