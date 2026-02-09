# Java Set Interface – Short & Important Documentation

## What is Set?
`Set` is a part of `java.util` package that represents a **collection of unique elements**.  
It does **not allow duplicate values**.

```java
public interface Set<E> extends Collection<E>
```

### Key Characteristics of Set
* ❌ Does not allow duplicate elements
* ❌ Does not support index-based access (get() not allowed)
* ✔ Allows at most one null element (depends on implementation)
* ✔ Unordered collection (order not guaranteed)

### Common Implementations
| Implementation  | 특징                                  |
| --------------- | ----------------------------------- |
| `HashSet`       | Fast, unordered                     |
| `LinkedHashSet` | Maintains insertion order           |
| `TreeSet`       | Sorted order (ascending by default) |

### Basic Example
```java
Set<String> names = new HashSet<>();
names.add("John");
names.add("Sharwan");
names.add("John"); // duplicate ignored

for(String name : names){
    System.out.println(name);
}
```

## Important Methods

* add(E e) – adds element
* remove(Object o) – removes element
* contains(Object o) – checks element
* size() – returns number of elements
* isEmpty() – checks if set is empty

## When to Use Set?
* When duplicate data must be avoided
* When uniqueness is important
* Example: roll numbers, usernames, email IDs