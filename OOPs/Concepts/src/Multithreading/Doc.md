# Multithreading – Important Questions (Java)

## 1. What is Multithreading?
Multithreading is a feature in Java that allows multiple threads (small units of a process) to run concurrently. It enables a program to perform multiple tasks simultaneously, improving CPU utilization and program performance.

---

## 2. What is a Thread?
A thread is the smallest unit of execution within a process. Multiple threads can exist within a process and share the same memory space.

---

## 3. Advantages of Multithreading
- Better CPU utilization
- Faster program execution
- Efficient use of system resources
- Allows concurrent task execution
- Improves responsiveness of applications

---

## 4. Life Cycle of a Thread
A thread goes through different states during execution:

1. **New** – Thread is created but not started.
2. **Runnable** – Thread is ready to run.
3. **Running** – Thread is currently executing.
4. **Blocked/Waiting** – Thread is waiting for resources.
5. **Terminated (Dead)** – Thread execution is completed.

---

## 5. Ways to Create a Thread in Java
There are two main ways:

### 1. Extending the Thread Class
```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start();
    }
}
```

### 2. Implementing Runnable Interface
```java
class MyThread implements Runnable {
    public void run() {
        System.out.println("Thread is running");
    }

    public static void main(String[] args) {
        Thread t = new Thread(new MyThread());
        t.start();
    }
}
```

---

## 6. Difference Between start() and run()

| start() | run() |
|------|------|
| Creates a new thread | Executes in the current thread |
| Calls run() internally | Does not create a new thread |
| Enables multithreading | Works like a normal method |

---

## 7. What is Thread Priority?
Thread priority determines the order in which threads are scheduled for execution.

Java provides three constants:
- `Thread.MIN_PRIORITY` (1)
- `Thread.NORM_PRIORITY` (5)
- `Thread.MAX_PRIORITY` (10)

Example:
```java
t1.setPriority(Thread.MAX_PRIORITY);
```

---

## 8. What is Thread.sleep()?
`Thread.sleep()` pauses the execution of a thread for a specified time.

Example:
```java
Thread.sleep(1000); // pauses thread for 1 second
```

---

## 9. What is Thread Synchronization?
Thread synchronization is the process of controlling multiple threads so that shared resources are accessed safely without data inconsistency.

Example:
```java
synchronized void display() {
    System.out.println("Synchronized method");
}
```

---

## 10. Difference Between Process and Thread

| Process | Thread |
|------|------|
| Independent program | Part of a process |
| Has separate memory | Shares memory |
| Slower communication | Faster communication |
| Heavyweight | Lightweight |

---

## 11. Example Program of Multithreading

```java
class MyThread extends Thread {

    public void run() {
        for(int i = 1; i <= 5; i++) {
            System.out.println("Thread: " + i);
        }
    }

    public static void main(String[] args) {

        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();

        t1.start();
        t2.start();
    }
}
```

---

## 12. Practice Questions

1. Define multithreading and explain its advantages.
2. Explain the life cycle of a thread.
3. Write a program to create a thread using the Thread class.
4. Write a program to create a thread using Runnable interface.
5. Differentiate between process and thread.
6. Explain thread synchronization.
7. What is thread priority in Java?
8. Explain the difference between start() and run().
9. Write a Java program demonstrating multithreading.
10. What is Thread.sleep() method?

---

✔ These questions are commonly asked in **Java, OOP, and BCA examinations**.