## ☕ Java Stream API
### 📌 Introduction

The Stream API was introduced in Java 8.

A Stream is a sequence of elements that supports functional-style operations to process data from collections like List, Set, etc.

    ⚠️ Stream does not store data. It only processes data.


## 🎯 Why Use Streams?
* Cleaner and more readable code
* Less boilerplate (no need for complex loops)
* Supports functional programming
* Enables parallel processing
* Improves performance for large datasets

## 🏗 Creating a Stream
```java
import java.util.*;
import java.util.stream.*;

public class StreamExample {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Sharwan", "Ram", "Sita");

        Stream<String> stream = names.stream();
        stream.forEach(System.out::println);
    }
}
```


## ⚙️ Types of Stream Operations
### 🔹 1. Intermediate Operations

    (Return another Stream)
* filter()
* map()
* sorted()
* distinct()
* limit()

### Example
```java
List<Integer> numbers = Arrays.asList(1,2,3,4,5,6);

numbers.stream()
       .filter(n -> n % 2 == 0)
       .forEach(System.out::println);

```

## 🔹 2. Terminal Operations
    (Return final result)
* forEach()
* collect()
* count()
* reduce()
* anyMatch()
* allMatch()

### Example
```java
List<String> names = Arrays.asList("Ram", "Shyam", "Hari");

long count = names.stream()
                  .filter(name -> name.startsWith("R"))
                  .count();

System.out.println(count);

```


# 🛠 Common Stream Methods

## 🔹 map()

    Transforms elements.
```java
numbers.stream()
.map(n -> n * n)
.forEach(System.out::println);
```

## 🔹 filter()
    Filters elements based on condition.
```java
numbers.stream()
.filter(n -> n > 2)
.forEach(System.out::println);

```

## 🔹 reduce()
    Reduces elements to a single value.
```java
int sum = numbers.stream()
.reduce(0, (a, b) -> a + b);

System.out.println(sum);
```

## 🔹 collect()

    Collects result into a List or Set.
```java
List<Integer> evenList = numbers.stream()
.filter(n -> n % 2 == 0)
.collect(Collectors.toList());
```


## 🚀 Parallel Stream
    Streams can run in parallel:
```java
numbers.parallelStream()
.forEach(System.out::println);

```

# 🔍 Stream vs Collection
| Stream           | Collection            |
| ---------------- | --------------------- |
| Processes data   | Stores data           |
| Functional style | Object-oriented style |
| One-time use     | Reusable              |
| Lazy evaluation  | Immediate evaluation  |

## 💡 Real-World Example
    Find names longer than 4 characters and convert them to uppercase:
```java
List<String> names = Arrays.asList("Ram", "Sharwan", "Hari", "Sita");

List<String> result = names.stream()
                           .filter(name -> name.length() > 4)
                           .map(String::toUpperCase)
                           .collect(Collectors.toList());

System.out.println(result);
```

## ✅ Summary
* Introduced in Java 8
* Supports functional programming
* Has Intermediate and Terminal operations
* Improves readability and performance
* Supports parallel processing