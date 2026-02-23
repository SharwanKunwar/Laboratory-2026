# Java Stream Operations – Quick Reference

| Operation      | Purpose                               | Example                                                                 | Output       |
|----------------|---------------------------------------|-------------------------------------------------------------------------|-------------|
| **reduce()**    | Combine elements → single value      | `int sum = numbers.stream().reduce(0, (a,b)->a+b);`                     | `15`        |
| **collect()**   | Convert stream → collection          | `List<String> r = names.stream().filter(n->n.startsWith("R")).collect(Collectors.toList());` | `[Ram]`     |
| **findFirst()** | Get first element (Optional)         | `Optional<Integer> f = numbers.stream().filter(n->n%2==0).findFirst();` | `2`         |
| **findAny()**   | Get any element (Optional)           | `Optional<Integer> a = numbers.stream().findAny();`                     | `1`         |
| **allMatch()**  | Check all elements satisfy condition | `boolean b = numbers.stream().allMatch(n->n>0);`                        | `true`      |
| **anyMatch()**  | Check any element satisfies condition| `boolean b = numbers.stream().anyMatch(n->n>4);`                        | `true`      |
| **noneMatch()** | Check none satisfy condition         | `boolean b = numbers.stream().noneMatch(n->n<0);`                        | `true`      |
| **forEach()**   | Iterate through elements             | `names.stream().forEach(System.out::println);`                           | `Ram\nHari\nSita` |

## Notes
- All these operations are part of **Java 8 Stream API**.
- `reduce()` → single value, `collect()` → collection.
- `find*()` and `match*()` return **Optional** or **boolean**.
- `forEach()` is used for iteration and side-effects like printing.