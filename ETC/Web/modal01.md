## Web & Programming Concepts – Short Notes (5 Marks Each)
<hr><br>

## 1. What is CSS Selector?

### Description

CSS selectors are used to select and target HTML elements so that styles can be applied to them.

### Types of CSS Selectors with Examples

* **Element Selector**

```css
p {
  color: red;
}
```

* **Class Selector**

```css
.myClass {
  font-size: 20px;
}
```

* **ID Selector**

```css
#myId {
  background-color: yellow;
}
```

* **Universal Selector**

```css
* {
  margin: 0;
}
```

* **Group Selector**

```css
h1, p {
  color: blue;
}
```

---

## 2. What is Exception Handling?

### Description

Exception handling is a mechanism to handle runtime errors so the program does not crash.

### Example (Java)

```java
try {
    int a = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} finally {
    System.out.println("Execution finished");
}
```

---

## 3. What is XML Schema?

### Description

XML Schema (XSD) defines the structure, elements, and attributes of an XML document.

### Example

```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

  <xs:element name="student">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="name" type="xs:string"/>
      </xs:sequence>
      <xs:attribute name="id" type="xs:int"/>
    </xs:complexType>
  </xs:element>

</xs:schema>
```

---

## 4. What is XSL? Describe XSLT

### Description

XSL (Extensible Stylesheet Language) is used to style XML documents.
XSLT is used to transform XML into another format like HTML.

### Example

```xml
<xsl:template match="/">
  <html>
    <body>
      <h2>Student List</h2>
      <xsl:value-of select="student/name"/>
    </body>
  </html>
</xsl:template>
```

---

## 5. What is Cookie?

### Description

A cookie is a small piece of data stored in the user's browser by a website.

### Example (JavaScript)

```javascript
document.cookie = "username=Sharwan; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/";
```

To read cookie:

```javascript
console.log(document.cookie);
```

---

## 6. What is SQL Statement?

### Description

SQL statements are used to perform operations on a database.

### Types of SQL Statements

* **DDL (Data Definition Language)**

```sql
CREATE TABLE student (id INT, name VARCHAR(50));
```

* **DML (Data Manipulation Language)**

```sql
INSERT INTO student VALUES (1, 'Ram');
```

* **DQL (Data Query Language)**

```sql
SELECT * FROM student;
```

* **DCL (Data Control Language)**

```sql
GRANT SELECT ON student TO user1;
```

* **TCL (Transaction Control Language)**

```sql
COMMIT;
ROLLBACK;
```

---

## ✅ Summary

These concepts form the foundation of web development and database management, including styling (CSS), error handling (Java), data structuring (XML), transformation (XSLT), state management (Cookies), and database operations (SQL).

---
