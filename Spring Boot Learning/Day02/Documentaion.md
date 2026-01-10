# 📦 Maven Dependencies – README.md

## 🔹 What are Maven Dependencies?

In **Maven**, a **dependency** is an external library or framework that your Java project needs to work properly.

Instead of manually downloading JAR files and adding them to your project, **Maven automatically downloads and manages them** for you.

📌 Examples:
- Spring Boot
- Hibernate
- JUnit
- MySQL Connector
- Lombok

---

## 🔹 Why Maven Dependencies are Important?

Maven dependencies help to:
- Avoid manual JAR management
- Automatically download required libraries
- Handle library versions
- Resolve dependency conflicts
- Keep projects clean and organized

---

## 🔹 Where are Dependencies Defined?

All Maven dependencies are defined inside the **`pom.xml`** file.

📌 Location:
    project-root/
        └── pom.xml


---

## 🔹 Dependency Structure in `pom.xml`

Basic structure of a Maven dependency:

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <version>3.2.0</version>
</dependency>
```
## 🔹 Explanation of Dependency Tags
1️⃣ groupId

* Represents the organization or company
* Usually written in reverse domain format

```xml
org.springframework.boot
```

2️⃣ artifactId

* Name of the library
* Unique within the group

📌 Example:
```
spring-boot-starter-web
```

3️⃣ version

* Specifies the version of the library
* Helps maintain compatibility

📌 Example:
```
3.2.0
```

4️⃣ scope (Optional)

Defines when the dependency is required.

| Scope    | Description                            |
| -------- | -------------------------------------- |
| compile  | Default, needed at compile and runtime |
| provided | Provided by server (e.g., Tomcat)      |
| runtime  | Needed only at runtime                 |
| test     | Used only for testing                  |
| system   | Provided manually                      |

```
<scope>test</scope>
```

## 🔹 Example: Adding JUnit Dependency

```
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
```

## 🔹 Common Maven Dependencies (Examples)
✅ Spring Boot Web
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
✅ MySQL Connector
```
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>runtime</scope>
</dependency>

```

✅ Lombok
```
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <scope>provided</scope>
</dependency>
```

## 🔹 Dependency Management in Spring Boot

Spring Boot uses dependency management, so you don’t need to specify versions for most dependencies.

📌 Spring Boot automatically selects compatible versions.


## 🔹 Where Maven Downloads Dependencies?

Maven downloads dependencies into the local repository:
```
~/.m2/repository
```
On Windows:
```
C:\Users\YourName\.m2\repository

```

## 🔹 What Happens When You Add a Dependency?

1. Maven checks local repository
2. If not found → downloads from Maven Central
3. Stores it in .m2 folder
4. Adds it to the project classpath

## 🔹 Maven Central Repository

Official repository where Maven dependencies are stored:

📌 https://mvnrepository.com

* You can:
    * Search libraries
    * Copy dependency code
    * Check versions

## 🔹 Advantages of Maven Dependencies

    ✔ Automatic dependency management
    ✔ No manual JAR files
    ✔ Version control
    ✔ Easy project sharing
    ✔ Industry standard


## 🔹 Summary

* Maven dependencies manage external libraries
* Defined inside pom.xml
* Automatically downloaded and updated
* Make Java projects cleaner and scalable
* Essential for Spring Boot and enterprise projects