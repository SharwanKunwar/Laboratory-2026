# 🌱 Spring Boot – Day 1 Documentation

This document covers the **basic foundation of Spring Boot**. It is designed for beginners and explains concepts in a simple, exam‑friendly, and practical way.

---

## 📜 History of Spring Framework

* **Spring Framework** was introduced by **Rod Johnson** in **2003**.
* It was created to solve the complexity of **J2EE (Java 2 Enterprise Edition)** development.
* Earlier, developers had to write a lot of **boilerplate code** and heavy XML configurations.
* Spring introduced concepts like:

  * Dependency Injection (DI)
  * Inversion of Control (IoC)
  * Loose coupling

➡️ Later, **Spring Boot** was introduced in **2014** to make Spring development even easier and faster.

---

## 🚀 What is Spring Boot?

Spring Boot is an **extension of the Spring Framework** that simplifies the development of **standalone, production‑ready Spring applications**.

### Key Features:

* Auto configuration
* Embedded server (Tomcat)
* Minimal configuration
* Faster development
* No need for external server deployment

➡️ You can run a Spring Boot application using **just one command**.

---

## 🔄 Difference Between Spring and Spring Boot

| Feature               | Spring                  | Spring Boot          |
| --------------------- | ----------------------- | -------------------- |
| Configuration         | Heavy XML / Java Config | Auto Configuration   |
| Setup Time            | Slow                    | Very Fast            |
| Embedded Server       | ❌ No                    | ✅ Yes                |
| Dependency Management | Manual                  | Starter Dependencies |
| Deployment            | External Server         | Standalone JAR       |

---

## 🖥️ Embedded Tomcat Server

* Spring Boot comes with an **embedded Tomcat server** by default.
* This means:

  * No need to install Tomcat separately
  * No WAR file deployment
* Application runs as a **standalone JAR**

### Supported Embedded Servers:

* Tomcat (default)
* Jetty
* Undertow

➡️ You can run the app using:

```bash
java -jar application.jar
```

---

## ⚙️ Traditional Spring vs Spring Boot Configuration

### Traditional Spring Configuration:

* Requires:

  * web.xml
  * applicationContext.xml
  * DispatcherServlet configuration
* Manual bean definitions
* Time‑consuming setup

### Spring Boot Configuration:

* No web.xml
* No XML configuration
* Uses:

  * `@SpringBootApplication`
  * `application.properties` or `application.yml`
* Auto‑detects beans and configurations

➡️ Result: **Less code, more productivity**

---

## 🧩 Bean in Spring

A **Bean** is an object that is **managed by the Spring container**.

### Important Points:

* Beans are created, initialized, and destroyed by Spring
* Defined using:

  * `@Component`
  * `@Service`
  * `@Repository`
  * `@Controller`

### Example:

```java
@Component
public class Student {
    public void display() {
        System.out.println("Student Bean");
    }
}
```

---

## 📦 Application Context

* **ApplicationContext** is the **Spring container**.
* It is responsible for:

  * Creating beans
  * Managing dependencies
  * Handling lifecycle of beans

### Types of ApplicationContext:

* ClassPathXmlApplicationContext
* AnnotationConfigApplicationContext
* WebApplicationContext

➡️ In Spring Boot, the application context is created **automatically**.

---

## 🛠️ Spring Initializr

Spring Initializr is a **web‑based tool** used to create Spring Boot projects quickly.

### What it Provides:

* Project structure
* Dependency management
* Maven or Gradle setup

### Common Options:

* Project: Maven / Gradle
* Language: Java
* Packaging: JAR
* Java Version
* Dependencies (Web, JPA, Security, etc.)

➡️ Official Site:
[https://start.spring.io](https://start.spring.io)

---

## ✅ Summary

* Spring Boot simplifies Spring development
* Provides auto configuration and embedded servers
* Eliminates boilerplate code
* Ideal for microservices and modern backend development

---

📘 **End of Day 1 – Spring Boot Basics**

Next topics may include:

* Project structure
* application.properties
* REST APIs
* Controllers
* Dependency Injection
