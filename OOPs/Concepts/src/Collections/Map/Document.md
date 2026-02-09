# Java Map Interface – Short & Important Documentation

## What is Map?
`Map` is a part of `java.util` package that stores data in **key–value pairs**.  
Each **key must be unique**, but values can be duplicated.

```java
public interface Map<K, V>
```

## Key Characteristics of Map

* ✔ Stores data as key → value
* ❌ Does not allow duplicate keys
* ✔ Allows duplicate values
* ❌ Not a subtype of Collection
* ✔ Each key maps to only one value


## Common Implementations
| Implementation  | 특징                        |
| --------------- | ------------------------- |
| `HashMap`       | Fast, unordered           |
| `LinkedHashMap` | Maintains insertion order |
| `TreeMap`       | Sorted by keys            |
| `Hashtable`     | Synchronized, legacy      |

### Basic Example
```java
Map<Integer, String> map = new HashMap<>();
map.put(1, "John");
map.put(2, "Sharwan");
map.put(1, "Parbesh"); // overwrites value of key 1

System.out.println(map.get(1));
```

## Important Methods

* put(K,V) – add key-value pair
* get(K) – get value by key
* remove(K) – remove entry
* containsKey(K) – check key
* containsValue(V) – check value
* keySet() – returns all keys
* values() – returns all values

## How to print map?
```java
for(Map.Entry<Integer, String> entry : map.entrySet()){
    System.out.println(entry.getKey() + " = " + entry.getValue());
}
```

## When to Use Map?
* When data must be stored as key-value pairs
* When fast lookup using keys is required
* Example: rollNo → name, id → employee