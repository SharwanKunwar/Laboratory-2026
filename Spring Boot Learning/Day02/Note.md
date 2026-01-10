# 📘 Spring Boot Core Concepts Documentation

This document explains the **core architecture, internal working, and execution flow of a Spring Boot application** in a simple and structured way.

---

## 📂 Spring Boot Application Structure

A typical Spring Boot project follows a **standard and opinionated structure**:

project-name
│
├── src
│ ├── main
│ │ ├── java
│ │ │ └── com.example.demo
│ │ │ ├── DemoApplication.java
│ │ │ ├── controller
│ │ │ ├── service
│ │ │ ├── repository
│ │ │ └── model
│ │ └── resources
│ │ ├── application.properties / application.yml
│ │ ├── static
│ │ └── templates
│ └── test
│
├── pom.xml
└── README.md


### Key Files
- **DemoApplication.java** → Main entry point
- **application.properties** → Configuration file
- **pom.xml** → Maven dependencies

---

## ⚙️ Internal Working of Spring Boot

Spring Boot works on top of the **Spring Framework** and automates:
- Configuration
- Dependency management
- Server setup

### Internally, Spring Boot:
1. Creates an **ApplicationContext**
2. Scans components
3. Creates beans
4. Injects dependencies
5. Starts embedded server (Tomcat)

---

## 🫘 Bean

A **Bean** is an object managed by the **Spring IoC Container**.

### Example
```java
@Component
public class UserService {
}
```
Spring creates and manages this object automatically.

### Common Bean Annotations

* @Component
* @Service
* @Repository
* @Controller
* @Bean

### 🔗 Dependency Injection (DI)

Dependency Injection means Spring provides required objects automatically, instead of you creating them manually.

```java
@Service
public class UserService {
}

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
}
```
### Types of DI

* Constructor Injection (recommended ✅)
* Setter Injection
* Field Injection

### 📦 IoC Container (Inversion of Control)

The IoC Container is responsible for:
* Creating beans
* Managing bean lifecycle
* Injecting dependencies

You do not control object creation — Spring does.

🌱 ApplicationContext

ApplicationContext is an advanced version of BeanFactory.

#### Responsibilities
* Loads configuration
* Manages beans
* Handles dependency injection
* Supports events and AOP

Spring Boot automatically creates it using:

* AnnotationConfigApplicationContext
* SpringApplication.run()

### 🔍 Component Scanning

Spring Boot scans packages to find beans automatically.

Enabled by:
```java
@SpringBootApplication
```

Which includes:
* @ComponentScan
* @EnableAutoConfiguration
* @Configuration

Default Behavior
* Scans current package and sub-packages

### ⚡ Auto Configuration

Auto Configuration allows Spring Boot to configure beans automatically based on dependencies.

Example

* If spring-boot-starter-web is present →
    * Tomcat is configured
    * DispatcherServlet is created
    * MVC setup is done

Powered by

* spring.factories
* Conditional annotations:
    * @ConditionalOnClass
    * @ConditionalOnMissingBean

### ▶️ What Happens When You Run a Spring Boot Application?
Step-by-Step Execution Flow

1. Main Method Executes
```java
SpringApplication.run(DemoApplication.class, args);
```

2. SpringApplication Starts
    * Determines application type (Web / Reactive)
    * Loads initializers & listeners
3. ApplicationContext Created
    * Web context if web app
    * Non-web context otherwise
4. Component Scanning
    * Finds @Component, @Service, @Repository, etc.
5. Bean Creation
    * Beans are instantiated
    * Dependencies are injected
6. Auto Configuration Applied
    * Based on classpath and properties
7. Embedded Server Starts
    * Tomcat/Jetty/Netty starts
    * Application listens on port (default: 8080)
8. Application Ready
    * Application is fully initialized
    * Ready to handle requests


✅ Summary

* Spring Boot simplifies Spring development
* Uses IoC and DI to manage objects
* Auto-configures application based on dependencies
* Embedded server removes deployment complexity
* Clean, production-ready setup with minimal configuration