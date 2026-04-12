# #Short question for 5 marks 
## 1. Explain what are the tags and attributes for form in HTML document?
An HTML form is used to collect user input and send it to a server for processing.

#### 🔹 Form Tags:
```
<form>: Defines the form.
<input>: Creates input fields (text, password, etc.).
<label>: Provides labels for inputs.
<textarea>: Allows multi-line text input.
<select> and <option>: Create dropdown lists.
<button>: Adds a clickable button.
```

#### 🔹 Form Attributes:
* **action:** Specifies where form data is sent.
* **method:** Defines how data is sent (GET or POST).
* **type:** Defines the type of input field.
* **name:** Identifies form data.
* **value:** Sets default value.
* **placeholder:** Displays hint text.
* **required:*** Makes a field mandatory.


<br><br>

## 2. What is XML? Differentiate XLM with html.
XML (eXtensible Markup Language) is a markup language used to store and transport data. It allows users to define their own tags and is designed to be both human-readable and machine-readable.

    👉 It focuses on data storage and transfer, not how things look.

| Basis              | XML                                         | HTML                          |
| ------------------ | ------------------------------------------- | ----------------------------- |
| **Full Form**      | eXtensible Markup Language                  | HyperText Markup Language     |
| **Purpose**        | Stores and transports data                  | Displays data on web pages    |
| **Tags**           | User-defined tags                           | Predefined tags               |
| **Focus**          | Data structure                              | Data presentation             |
| **Syntax Rules**   | Strict (must be properly closed and nested) | Flexible (some tags optional) |
| **Error Handling** | Errors are not tolerated                    | Browsers ignore errors        |
| **Usage**          | Data exchange (APIs, config files)          | Web page design               |


### 🔹 Example
**XML:**
```xml
<student>
  <name>Sharwan</name>
  <age>20</age>
</student>
```

**HTML:**
```html
<h1>Sharwan</h1>
<p>Age: 20</p>
```

<br><br>

## 3. Describe the tags and attributes for a form in HTML document?
An HTML form is used to collect user input and send it to a server for processing. It consists of various tags and attributes that define its structure and behavior.

### 🔹 Form Tags
* form
    Defines the form container.
* input
    Used to create input fields like text, password, radio, checkbox, etc.
* label
    Provides a label for input elements.
* textarea
    Used for multi-line text input.
* select and option
    Used to create dropdown lists.
* button
    Creates a clickable button (submit/reset).
* fieldset and legend
    Groups related form elements with a caption.


### 🔹 Form Attributes
**➤ Attributes of form tag:**
* action: Specifies the URL where form data is sent.
* method: Defines how data is sent (GET or POST).
* target: Specifies where to display response (_self, _blank).
* enctype: Specifies encoding type (used in file upload).

**➤ Attributes of input tag:**
* type: Specifies input type (text, password, email, etc.).
* name: Identifies input data for server.
* value: Sets default value.
* placeholder: Shows hint text.
* required: Makes field mandatory.
* readonly: Makes field uneditable.
* disabled: Disables the field.
* maxlength: Limits number of characters.

<br><br>

## 4. What is anonymous access ? discuss about integrated windows authentication

Anonymous access allows users to access a website or resource without providing any username or password.

* The system assigns a default guest identity.
* Commonly used for public websites where no login is required.
* Users have limited permissions for security.

**✔️ Example:**

    Visiting a public website without logging in.

### ✍️ Integrated Windows Authentication (IWA)

Integrated Windows Authentication is a secure authentication method that uses a user’s Windows login credentials to access web resources.

* No need to enter username/password again.
* Works mainly in intranet (local network) environments.
* Uses protocols like Kerberos or NTLM.

### 🔹 Features:
* Single Sign-On (SSO): User logs in once and accesses multiple services.
* Secure: Credentials are not sent in plain text.
* Domain-based: Works with Windows domain accounts.
* Automatic authentication: Browser sends credentials automatically.

### 🔹 Advantages:
* Strong security
* Convenient for users
* No repeated login prompts

### 🔹 Disadvantages:
* Works mainly in Windows environments
* Requires proper network/domain setup
* Not suitable for public websites

<br><br>

## 5. Explain tire technology with examples? 
Tier architecture is a way of organizing a system into different layers (tiers), where each tier has a specific role like presentation, processing, or data storage.
```
👉 It helps in better management, scalability, and security of applications.
```
<br>

### 🔹 Types of Tier Architecture

#### 1. Single-Tier Architecture (1-Tier)

All components are in one place.

* User interface, business logic, and database are together.
* No separation.

**✔️ Example:**
Simple desktop application like a calculator or MS Access database.

#### 2. Two-Tier Architecture (2-Tier)
Client interacts directly with the database.

* Client: User interface + some logic
* Server: Database

**✔️ Example:**
A desktop application connecting directly to MySQL/PostgreSQL.

#### 3. Three-Tier Architecture (3-Tier)
Most common and actually useful in real life.

* Presentation Layer (UI)
* Application Layer (Business logic)
* Data Layer (Database)

**✔️ Example:**
***Web application:***
* Frontend (React/HTML)
* Backend (Spring Boot)
* Database (PostgreSQL)


#### 4. N-Tier Architecture
Extension of 3-tier with more layers.
* Adds services like API layer, caching, security, etc.

**✔️ Example:**
Large systems like e-commerce platforms:

* Frontend
* API Gateway
* Microservices
* Database


### 🔹 Advantages
* Easy to maintain
* Scalable
* Better security
* Separation of concerns

<br><br>

## 6. Define session. Explain its use with example
A session is a mechanism used to store user data temporarily on the server while a user is interacting with a website.

* It is created when a user visits a site.
* It ends when the user logs out or closes the browser (or after timeout).
* Each user gets a unique session ID.

#### 🔹 Use of Session
Sessions are used to maintain state between multiple requests.
Because HTTP is stateless (it forgets everything like a goldfish), sessions help websites remember things like:

* User login status
* Shopping cart items
* User preferences

#### 🔹 Example
**Online shopping cart**
* Items added to cart are stored in session.
* Even if user moves to another page, items remain.

<br><br><br>

# #Long questions for 10 marks 

### 1. Write a HTML and CSS code design a data entry form for marks entry of a students using different html elements like (table, image , formatting tags, links).

### HTML + CSS: Student Marks Entry Form

**Code:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Student Marks Entry Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
        }

        .container {
            width: 60%;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
        }

        h1 {
            text-align: center;
            color: darkblue;
        }

        img {
            display: block;
            margin: auto;
            width: 100px;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        table, th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
        }

        th {
            background-color: lightblue;
        }

        input[type="text"], input[type="number"] {
            width: 90%;
            padding: 5px;
        }

        .btn {
            margin-top: 15px;
            padding: 10px 20px;
            background-color: darkblue;
            color: white;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background-color: green;
        }

        .link {
            text-align: center;
            margin-top: 10px;
        }

    </style>
</head>
<body>

<div class="container">

    <!-- Image -->
    <img src="https://via.placeholder.com/100" alt="School Logo">

    <!-- Heading with formatting -->
    <h1><u><b>Student Marks Entry Form</b></u></h1>

    <form>

        <!-- Student Info -->
        <p><b>Name:</b> <input type="text" name="name"></p>
        <p><b>Roll No:</b> <input type="text" name="roll"></p>

        <!-- Table for Marks -->
        <table>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
            </tr>
            <tr>
                <td>Math</td>
                <td><input type="number" name="math"></td>
            </tr>
            <tr>
                <td>Science</td>
                <td><input type="number" name="science"></td>
            </tr>
            <tr>
                <td>English</td>
                <td><input type="number" name="english"></td>
            </tr>
            <tr>
                <td>Computer</td>
                <td><input type="number" name="computer"></td>
            </tr>
        </table>

        <!-- Buttons -->
        <center>
            <input type="submit" value="Submit" class="btn">
            <input type="reset" value="Reset" class="btn">
        </center>

    </form>

    <!-- Link -->
    <div class="link">
        <p><i>Visit our website:</i> 
        <a href="https://example.com" target="_blank">Click Here</a></p>
    </div>

</div>

</body>
</html>
```

#### 🔹 What This Includes (so examiner stays calm)
* ✔ Form (form, input)
* ✔ Table (table)
* ✔ Image (img)
* ✔ Formatting tags (b, u, i)
* ✔ Link (a)
* ✔ CSS styling


<br><br>

## 2. Develop a simple web page that asks the users input (product Name , Rate , Quantity, Supplier, data) and store into database using server-side script.

## ✍️ Simple Web Page with Database Storage
### 🔹 1. HTML Form (Frontend)
```html
<!DOCTYPE html>
<html>
<head>
    <title>Product Entry Form</title>
</head>
<body>

<h2>Product Entry Form</h2>

<form action="insert.php" method="post">
    Product Name: <input type="text" name="name"><br><br>
    Rate: <input type="number" name="rate"><br><br>
    Quantity: <input type="number" name="qty"><br><br>
    Supplier: <input type="text" name="supplier"><br><br>
    Date: <input type="date" name="date"><br><br>

    <input type="submit" value="Save">
</form>

</body>
</html>
```
### 🔹 2. Database (MySQL)
```sql
CREATE DATABASE product_db;

USE product_db;

CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    rate INT,
    quantity INT,
    supplier VARCHAR(50),
    date DATE
);
```

### 🔹 3. Server-Side Script (PHP)
    Create a file insert.php

```php
<?php

$conn = new mysqli("localhost", "root", "", "product_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$rate = $_POST['rate'];
$qty = $_POST['qty'];
$supplier = $_POST['supplier'];
$date = $_POST['date'];

// Insert query
$sql = "INSERT INTO product (name, rate, quantity, supplier, date)
        VALUES ('$name', '$rate', '$qty', '$supplier', '$date')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();

?>
```

#### 🔹 Explanation (write this for theory marks)
* HTML form collects user input.
* Data is sent to the server using POST method.
* PHP script connects to MySQL database.
* SQL query inserts data into the table.
* Confirmation message is displayed after successful insertion.

<br><br>

### 4. What are the rules for rules for creating XML document? Write a XML code to store following information about employee. 
* Each employee has a name, address, phone , dept and website element.
* Address might appear multiple times
* Address has attribute name "type" with value permanent and temporary
* department have attribute extra 
* Phone must be 10 digits.

<br>

### ✍️ Rules for Creating an XML Document
    XML (eXtensible Markup Language) must follow strict syntax rules:

#### 🔹 1. Must have a root element
    Every XML document must contain one single root element.
#### 🔹 2. Tags must be properly closed
    Every opening tag must have a closing tag.
**Example**
```xml
<name>John</name>
```

#### 🔹 3. Tags are case-sensitive

```xml
<Name> and <name> are different
```

#### 🔹 4. Proper nesting is required
    Tags must be nested correctly.
    <a><b></b></a>

#### 🔹 5. Attributes must be quoted
```xml
<address type="permanent">
```

#### 🔹 6. No duplicate attributes in same element
    Each attribute name must be unique.

#### 🔹 7. Well-formed structure required
    XML must follow all rules strictly, otherwise it is invalid.

#### 🔹 8. Special characters must be escaped
**Example:**
```xml
 & → &amp;
 < → &lt;
```

### ✍️ XML Code for Employee Information
Based on your requirements:

* Employee: name, address (multiple), phone, dept, website
* Address has attribute type = permanent/temporary
* Department has attribute extra
* Phone must be 10 digits

```xml
<?xml version="1.0" encoding="UTF-8"?>

<employees>

    <employee>

        <name>Ram Bahadur</name>

        <address type="permanent">Kathmandu, Nepal</address>
        <address type="temporary">Lalitpur, Nepal</address>

        <phone>9812345678</phone>

        <department extra="IT">Computer Science</department>

        <website>https://ramdev.com</website>

    </employee>

</employees>
```

### 🔹 Notes
```xml
* Root element: <employees>
* Each employee is inside <employee>
* Multiple <address> elements allowed
* Attribute type used for address classification
* Department has attribute extra
* Phone is stored as 10-digit value (no spaces, no symbols)
```