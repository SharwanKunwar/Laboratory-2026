## 1. What is N-tier Architecture?

N-tier architecture is a software design pattern where an application is divided into multiple layers (tiers), each responsible for a specific function. This improves scalability, maintainability, and security.

### Common Tiers
* Presentation Layer (UI)
* Application Layer (Business Logic)
* Data Layer (Database)


## Three-Tier Architecture
1. Presentation Layer
    * User interface (HTML, CSS, JS)
    * Interacts with users
2. Application Layer (Business Logic)
    * Processes data
    * Applies rules and logic
3. Data Layer
    * Stores and retrieves data
    * Uses databases like MySQL, PostgreSQL


### Advantages
    * Easy maintenance
    * Better security
    * Scalable



## 2. What are CSS Properties?

CSS properties define how HTML elements should be styled.

## Examples
* color
* font-size
* margin
* padding
* border
* CSS Box Model

## It consists of:

* Content
* Padding
* Border
* Margin


```
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

## 3. What is XML Validation?
XML validation ensures that an XML document follows a defined structure using a schema.

Difference between XSD and DTD
| Feature       | XSD       | DTD     |
| ------------- | --------- | ------- |
| Format        | XML-based | Not XML |
| Data Types    | Supported | Limited |
| Extensibility | High      | Low     |
| Syntax        | Complex   | Simple  |



## 4. HTML Table and Important Tags
    Important Tags

    * <table> – Table container
    * <tr> – Table row
    * <th> – Table header
    * <td> – Table data


Example Table : 

```HTML
<table border="1">
  <tr>
    <th>College</th>
    <th>Phone No</th>
    <th>Logo</th>
  </tr>
  <tr>
    <td>RR Campus</td>
    <td>01-123456</td>
    <td>
      <a href="https://rrcampus.edu.np">
        <img src="logo1.png" width="50">
      </a>
    </td>
  </tr>
  <tr>
    <td>KU</td>
    <td>011-654321</td>
    <td>
      <a href="https://ku.edu.np">
        <img src="logo2.png" width="50">
      </a>
    </td>
  </tr>
</table>
```



## 5. Five Types of CSS Selectors
### 1. Element Selector
    p {
    color: red;
    }
### 2. Class Selector
    .box {
    background: blue;
    }
### 3. ID Selector
    #header {
    font-size: 20px;
    }
### 4. Group Selector
    h1, h2 {
    color: green;
    }
### 5. Universal Selector
    * {
    margin: 0;
    }


## 6. Server-Side Scripting
Server-side scripting is code that runs on the server to process user requests and generate responses.

### Example (PHP Program)

HTML Form : 
```HTML
<form action="sum.php" method="post">
  Number 1: <input type="text" name="num1"><br>
  Number 2: <input type="text" name="num2"><br>
  <input type="submit" value="Add">
</form>
```

PHP Code (sum.php):
```php
<?php
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
$sum = $num1 + $num2;

echo "Sum is: " . $sum;
?>
```


## 7. Error Handling in Server-Side Programs
Error handling is the process of detecting and managing errors during execution.

### Techniques
* Try-Catch blocks
* Validation checks
* Logging errors

### Example (PHP):
```php
<?php
try {
  $a = 10;
  $b = 0;
  if ($b == 0) {
    throw new Exception("Division by zero");
  }
  echo $a / $b;
} catch (Exception $e) {
  echo $e->getMessage();
}
?>
```

<br><br>

8. Divide and Conquer Algorithm

Divide and Conquer is a technique where a problem is divided into smaller subproblems, solved independently, and then combined.

### Steps
1. Divide
2. Conquer
3. Combine

### Example
* Merge Sort
* Quick Sort

#### Collision Resolution Techniques (Hashing)
Collision occurs when two keys map to the same index.

### Techniques
1. Linear Probing
    * Search next empty slot
2. Quadratic Probing
    * Use square increments
3. Double Hashing
    * Use second hash function
4. Chaining
    * Use linked list at each index


***Example***

    If h(x) = x % 10
        * Insert 15 → index 5
        * Insert 25 → collision → move to next slot