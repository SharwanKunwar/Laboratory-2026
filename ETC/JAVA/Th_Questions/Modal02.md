## 1. What are java buzzwords? write a java program to find simple interest . use command line argument to take input.
Java buzzwords are key features or characteristics that describe the capabilities and design goals of Java.

### Important Java Buzzwords
* Simple → Easy syntax, removes complex features like pointers
* Object-Oriented → Based on classes and objects
* Platform Independent → “Write Once, Run Anywhere”
* Secure → No direct memory access, bytecode verification
* Robust → Strong memory management and exception handling
* Multithreaded → Supports concurrent execution
* Portable → Can run on different platforms
* High Performance → Uses Just-In-Time (JIT) compiler
* Distributed → Supports network-based applications
* Dynamic → Can adapt to changing environments

```
Simple Interest = (Principal × Rate × Time) / 100
```

***Program Code***

```java
public class SimpleInterest {
    public static void main(String[] args) {

        // Check if enough arguments are passed
        if (args.length != 3) {
            System.out.println("Please provide Principal, Rate, and Time");
            return;
        }

        // Convert command line arguments to double
        double principal = Double.parseDouble(args[0]);
        double rate = Double.parseDouble(args[1]);
        double time = Double.parseDouble(args[2]);

        // Calculate Simple Interest
        double simpleInterest = (principal * rate * time) / 100;

        // Display result
        System.out.println("Simple Interest = " + simpleInterest);
    }
}
```

<br><br>

## 2. What are use of super keyword? Write a java program to create base class fruit which has name, test and size as its attributes and method called eat() which describe name and its test. Inherit the same in two other class Apple and orange and override the eat() method to represent each fruit taste.

The super keyword is used to refer to the immediate parent class object.

***Uses***
* ***Access Parent Class Variables***
    - Used when child class has same variable name as parent.
    - Example: super.name
* ***Call Parent Class Methods***
    - Used to invoke parent class method.
    - Example: super.eat()
* ***Invoke Parent Class Constructor***
    - Used to call constructor of parent class.
    - Example: super()

***Code***
```java
class Fruit {
    String name;
    String taste;
    String size;

    // Constructor
    Fruit(String name, String taste, String size) {
        this.name = name;
        this.taste = taste;
        this.size = size;
    }

    // Method
    void eat() {
        System.out.println("Fruit Name: " + name);
        System.out.println("Taste: " + taste);
    }
}

// Apple class
class Apple extends Fruit {

    Apple() {
        super("Apple", "Sweet", "Medium");
    }

    @Override
    void eat() {
        System.out.println("Apple tastes sweet and crispy.");
    }
}

// Orange class
class Orange extends Fruit {

    Orange() {
        super("Orange", "Citrus", "Medium");
    }

    @Override
    void eat() {
        System.out.println("Orange tastes tangy and juicy.");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {

        Apple a = new Apple();
        Orange o = new Orange();

        a.eat();
        o.eat();
    }
}
```

<br><br>

## 3. What is Difference between string and string buffer class? write a java program to identity the input string is palindrome or not ? 
| Feature           | String                                      | StringBuffer                         |
| ----------------- | ------------------------------------------- | ------------------------------------ |
| **Mutability**    | Immutable (cannot change)                   | Mutable (can change)                 |
| **Performance**   | Slower (creates new object on modification) | Faster (modifies same object)        |
| **Memory Usage**  | More memory (new objects created)           | Less memory (same object reused)     |
| **Thread Safety** | Not synchronized                            | Synchronized (thread-safe)           |
| **Example**       | `str = str + "abc"` creates new object      | `sb.append("abc")` modifies existing |

**example**
```java
String s = "Hello";
s = s + " World";  // new object created

StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");  // same object modified
```

***check Palindrome String***
```java
// Reverse the string
        for(int i = input.length() - 1; i >= 0; i--) {
            reversed = reversed + input.charAt(i);
        }
```

<br><br>

## 4. Why we need file handling in java ? Write java program to read file into a variable and then write a variable's content into another file.
File handling in Java is used to store, read, and manipulate data permanently in files instead of temporary memory.

**Need for File Handling**
* ***Permanent Storage***
    - Data is saved even after the program ends.
* ***Data Sharing***
    - Files can be accessed by different programs.
* ***Handling Large Data***
    - Efficient for storing large amounts of data.
* ***Data Backup***
    - Helps in maintaining records and logs.
* ***Input/Output Operations***
    - Enables reading from and writing to files.


***Program***
```java
import java.io.*;

public class FileCopyExample {
    public static void main(String[] args) {

        String data = "";

        try {
            // Read from file
            FileReader fr = new FileReader("input.txt");
            BufferedReader br = new BufferedReader(fr);

            String line;
            while ((line = br.readLine()) != null) {
                data = data + line + "\n";
            }
            br.close();

            // Write to another file
            FileWriter fw = new FileWriter("output.txt");
            BufferedWriter bw = new BufferedWriter(fw);

            bw.write(data);
            bw.close();

            System.out.println("File copied successfully.");

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```

<br><br>

## 5. What is the purpose of valueOf() method in wrapper classes ? write a java program to generate random integer, double and bytes.
The valueOf() method is used to convert a primitive data type or a String into its corresponding wrapper class object.

**Purpose**
* Converts primitive values into objects
    Example: int → Integer
* Converts String to wrapper object
    Example: "10" → Integer
* Helps in autoboxing and object manipulation
* Improves performance by reusing cached objects (in some cases)

***Program***
```java
import java.util.Random;

public class RandomExample {
    public static void main(String[] args) {

        Random rand = new Random();

        // Generate random integer
        int randomInt = rand.nextInt(100); // 0 to 99

        // Generate random double
        double randomDouble = rand.nextDouble(); // 0.0 to 1.0

        // Generate random bytes
        byte[] randomBytes = new byte[5];
        rand.nextBytes(randomBytes);

        // Display results
        System.out.println("Random Integer: " + randomInt);
        System.out.println("Random Double: " + randomDouble);

        System.out.print("Random Bytes: ");
        for(byte b : randomBytes) {
            System.out.print(b + " ");
        }
    }
}
```

## 6. What is JDBC? Write java program to connect database college and display all student information (Roll, Name, Address and Program) from student table.
JDBC (Java Database Connectivity) is an API that allows Java programs to connect and interact with databases.

**Purpose of JDBC**
* Establish connection with database
* Execute SQL queries
* Retrieve and update data
* Manage transactions

**Main Components**
* ***DriverManager*** → Establishes connection
* ***Connection*** → Represents database connection
* ***Statement*** → Executes SQL queries
* ***ResultSet*** → Stores query results

```
Program to Connect Database and Display Student Data
```
* Database name: college
* Table name: student
* Columns: Roll, Name, Address, Program

```java
import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {

        // Database URL, username, password
        String url = "jdbc:mysql://localhost:3306/college";
        String user = "root";
        String password = "root";

        try {
            // Load driver (optional for newer versions)
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish connection
            Connection con = DriverManager.getConnection(url, user, password);

            // Create statement
            Statement stmt = con.createStatement();

            // Execute query
            String query = "SELECT * FROM student";
            ResultSet rs = stmt.executeQuery(query);

            // Display data
            System.out.println("Roll\tName\tAddress\tProgram");
            while (rs.next()) {
                int roll = rs.getInt("Roll");
                String name = rs.getString("Name");
                String address = rs.getString("Address");
                String program = rs.getString("Program");

                System.out.println(roll + "\t" + name + "\t" + address + "\t" + program);
            }

            // Close connection
            con.close();

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
```


<br><br>

## 7. What is difference between class and interface in java ? create a java class Time with three attribute hours, minutes, and seconds. use appropriate constructors to initialize instance variable. Use method to display time in HH:MM:SS format, add and subtract two time object. implement the class to add, subtract and display time object.

| Feature          | Class                        | Interface                                                          |
| ---------------- | ---------------------------- | ------------------------------------------------------------------ |
| Definition       | Blueprint for objects        | Blueprint for behavior                                             |
| Methods          | Can have implemented methods | Only abstract methods (before Java 8), now can have default/static |
| Variables        | Instance variables allowed   | Only public static final (constants)                               |
| Constructors     | Yes                          | No                                                                 |
| Inheritance      | Single inheritance           | Multiple inheritance supported                                     |
| Access Modifiers | All types                    | Methods are public by default                                      |
| Object Creation  | Can create objects           | Cannot create objects directly                                     |

**Program**
```java
class Time {
    int hours, minutes, seconds;

    // Default Constructor
    Time() {
        hours = 0;
        minutes = 0;
        seconds = 0;
    }

    // Parameterized Constructor
    Time(int h, int m, int s) {
        hours = h;
        minutes = m;
        seconds = s;
    }

    // Display Method
    void display() {
        System.out.printf("%02d:%02d:%02d\n", hours, minutes, seconds);
    }

    // Add Time
    Time add(Time t) {
        Time result = new Time();

        result.seconds = this.seconds + t.seconds;
        result.minutes = this.minutes + t.minutes + (result.seconds / 60);
        result.hours = this.hours + t.hours + (result.minutes / 60);

        result.seconds %= 60;
        result.minutes %= 60;

        return result;
    }

    // Subtract Time
    Time subtract(Time t) {
        Time result = new Time();

        int totalSec1 = this.hours * 3600 + this.minutes * 60 + this.seconds;
        int totalSec2 = t.hours * 3600 + t.minutes * 60 + t.seconds;

        int diff = totalSec1 - totalSec2;

        result.hours = diff / 3600;
        diff %= 3600;

        result.minutes = diff / 60;
        result.seconds = diff % 60;

        return result;
    }

    // Main Method
    public static void main(String[] args) {
        Time t1 = new Time(2, 45, 50);
        Time t2 = new Time(1, 20, 30);

        System.out.print("Time 1: ");
        t1.display();

        System.out.print("Time 2: ");
        t2.display();

        Time sum = t1.add(t2);
        System.out.print("Addition: ");
        sum.display();

        Time diff = t1.subtract(t2);
        System.out.print("Subtraction: ");
        diff.display();
    }
}
```


<br><br>

# Distance calculation program ( add and sub )
```java
class Distance {
    int feet;
    int inch;

    // Default Constructor
    Distance() {
        feet = 0;
        inch = 0;
    }

    // Parameterized Constructor
    Distance(int f, int i) {
        feet = f;
        inch = i;

        normalize();
    }

    // Normalize (convert 12 inches = 1 foot)
    void normalize() {
        if (inch >= 12) {
            feet += inch / 12;
            inch = inch % 12;
        }

        if (inch < 0) {
            feet -= 1;
            inch += 12;
        }
    }

    // Display Method
    void display() {
        System.out.println(feet + "' " + inch + "\"");
    }

    // Add Method
    Distance add(Distance d) {
        Distance result = new Distance();

        result.feet = this.feet + d.feet;
        result.inch = this.inch + d.inch;

        result.normalize();

        return result;
    }

    // Subtract Method
    Distance subtract(Distance d) {
        Distance result = new Distance();

        int totalInch1 = this.feet * 12 + this.inch;
        int totalInch2 = d.feet * 12 + d.inch;

        int diff = totalInch1 - totalInch2;

        result.feet = diff / 12;
        result.inch = diff % 12;

        if (result.inch < 0) {
            result.inch += 12;
            result.feet -= 1;
        }

        return result;
    }

    // Main Method
    public static void main(String[] args) {
        Distance d1 = new Distance(5, 8);
        Distance d2 = new Distance(3, 10);

        System.out.print("Distance 1: ");
        d1.display();

        System.out.print("Distance 2: ");
        d2.display();

        Distance sum = d1.add(d2);
        System.out.print("Addition: ");
        sum.display();

        Distance diff = d1.subtract(d2);
        System.out.print("Subtraction: ");
        diff.display();
    }
}
```
