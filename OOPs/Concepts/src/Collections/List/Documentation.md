# Java List Interface – Complete Documentation

## 1. What is List?

`java.util.List<E>` is an ordered collection (also called a **sequence**).

### Main characteristics:
- Maintains **insertion order**
- Allows **duplicate elements**
- Elements can be accessed by their **integer index (0-based)**
- Extends `Collection<E>`
- Allows **null elements** (in most implementations)

```java
public interface List<E> extends Collection<E>
```

## 2. When to Use List (vs Set / Queue / Map)
| Requirement                           | Best Choice  |
| ------------------------------------- | ------------ |
| Need order + duplicates allowed       | `List`       |
| Need uniqueness                       | `Set`        |
| Need key → value pairs                | `Map`        |
| FIFO / priority-based processing      | `Queue`      |
| Fast random access (get/set by index) | `ArrayList`  |
| Frequent insert/delete at ends        | `LinkedList` |

## 3. Most Important List Methods (Beyond Collection)
| Method Signature                                       | Description                            | Since | Throws                      |
| ------------------------------------------------------ | -------------------------------------- | ----- | --------------------------- |
| `void add(int index, E element)`                       | Inserts element at specified position  | 1.2   | `IndexOutOfBoundsException` |
| `boolean addAll(int index, Collection<? extends E> c)` | Inserts all elements at position       | 1.2   | —                           |
| `E get(int index)`                                     | Returns element at position            | 1.2   | `IndexOutOfBoundsException` |
| `E set(int index, E element)`                          | Replaces element and returns old value | 1.2   | `IndexOutOfBoundsException` |
| `E remove(int index)`                                  | Removes & returns element              | 1.2   | `IndexOutOfBoundsException` |
| `int indexOf(Object o)`                                | First occurrence index or `-1`         | 1.2   | —                           |
| `int lastIndexOf(Object o)`                            | Last occurrence index or `-1`          | 1.2   | —                           |
| `ListIterator<E> listIterator()`                       | Bidirectional iterator                 | 1.2   | —                           |
| `ListIterator<E> listIterator(int index)`              | Iterator starting at index             | 1.2   | `IndexOutOfBoundsException` |
| `List<E> subList(int fromIndex, int toIndex)`          | View of range `[fromIndex, toIndex)`   | 1.2   | `IndexOutOfBoundsException` |

### Java 8+ Default Methods

```java
default void replaceAll(UnaryOperator<E> operator);
default void sort(Comparator<? super E> c);
```
### Java 9+ Static Factory Methods (Immutable Lists)

```java
static <E> List<E> of()
static <E> List<E> of(E e1)
static <E> List<E> of(E e1, E e2, ...)
static <E> List<E> of(E... elements)
static <E> List<E> copyOf(Collection<? extends E> coll)
```

## 4. Common Implementations – Comparison Table (2026)
| Implementation         | Internal Structure      | Random Access | Add/Remove (Middle) | Memory Overhead | Thread-safe?    | Best For                 |
| ---------------------- | ----------------------- | ------------- | ------------------- | --------------- | --------------- | ------------------------ |
| `ArrayList`            | Dynamic array           | O(1)          | O(n)                | Low             | No              | General purpose          |
| `LinkedList`           | Doubly-linked list      | O(n)          | O(1)                | High            | No              | Frequent end operations  |
| `CopyOnWriteArrayList` | Copy-on-write array     | O(1)          | O(n)                | High            | Yes (iteration) | Read-heavy concurrency   |
| `Vector`               | Synchronized array      | O(1)          | O(n)                | Low             | Yes             | Legacy only              |
| `Arrays.asList()`      | Fixed-size array view   | O(1)          | Unsupported         | Very low        | No              | Quick fixed list         |
| `List.of()`            | Immutable compact array | O(1)          | Unsupported         | Very low        | Yes             | Constants & immutability |

## 5. Modern & Recommended Ways to Create Lists (Java 9–21+)

```java
// Preferred (2024–2026)
List<String> names = List.of("Alice", "Bob", "Charlie");     // immutable
List<Integer> numbers = List.copyOf(someCollection);        // immutable copy

// Mutable list
List<String> mutable = new ArrayList<>();
List<String> withCapacity = new ArrayList<>(100);

// From array (fixed-size!)
String[] arr = {"x", "y", "z"};
List<String> asList = Arrays.asList(arr);                    // fixed-size
List<String> realCopy = new ArrayList<>(asList);            // mutable copy

// Java 10+ unmodifiable snapshot
List<String> snapshot = List.copyOf(myList);
```

## 6. Quick Code Examples – Most Used Patterns

```java
List<String> list = new ArrayList<>();

// Adding
list.add("Apple");
list.add(0, "Banana");
list.addAll(List.of("Cherry", "Date"));

// Accessing & modifying
String first = list.get(0);
list.set(1, "Blueberry");
System.out.println(list.indexOf("Cherry"));

// Removing
list.remove(2);          // by index
list.remove("Date");     // by object

// Iteration (2026 best practices)
for (String s : list) { }
list.forEach(System.out::println);
list.replaceAll(String::toUpperCase);
list.sort(String.CASE_INSENSITIVE_ORDER);

// SubList (view!)
List<String> sub = list.subList(1, 3);
sub.set(0, "Kiwi");      // affects original list
```

## 7. Common Pitfalls & Best Practices
* ❌ ConcurrentModificationException → don’t modify during enhanced for-loop 
  * ✅ Use removeIf() or ListIterator
* ⚠️ subList() returns a view, not a copy
* ✅ Prefer List.of() / List.copyOf() for immutability
* ✅ Use new ArrayList<>(capacity) when size is known
* ❌ Avoid Vector and Stack in new code
* 📦 For very large lists, ArrayList is usually the most memory-efficient


## ✅ Summary
The List interface is one of the most powerful and commonly used abstractions in Java. Understanding its behavior, implementations, and modern creation patterns is essential for writing clean, efficient, and safe Java code.

### Want deeper dives?
* 👉 ArrayList internals
* 👉 LinkedList real-world use-cases
* 👉 Performance benchmarks
* 👉 Thread-safe list patterns