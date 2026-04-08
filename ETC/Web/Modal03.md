# Web Technology (CACS205)

<br><br>

## 1. What is HTML? Explain its basic structure.
HTML (HyperText Markup Language) is the standard language used to create web pages. It structures content on the web using elements called tags.

**Basic structure of HTML document:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

**Explanation:**
```
* <!DOCTYPE html> → Defines HTML5 document
* <html> → Root element
* <head> → Contains metadata (title, CSS, etc.)
* <body> → Contains visible content
```

<br><br>

## 2. Define CSS and explain its importance.
CSS (Cascading Style Sheets) is used to control the presentation of HTML elements such as color, layout, and fonts.

**Importance:**
* Separates content from design
* Improves website appearance
* Enables responsive design
* Reduces code duplication
* Enhances loading speed

<br><br>

## 3. What are hyperlinks? Explain with example.
Hyperlinks are used to connect one webpage to another using the <a> tag.

**Example**
```html
<a href="https://example.com">Visit Website</a>
```

**Types:**
* Internal links
* External links
* Email links

<br><br>

## 4. Explain image maps in HTML.
Image maps allow different parts of an image to act as clickable links.

**Tags used:**
```
<img>
<map>
<area>
```

**Example**
```html
<img src="image.jpg" usemap="#map1">
<map name="map1">
  <area shape="rect" coords="0,0,100,100" href="link.html">
</map>
```
<br><br>

## 5. Explain HTML tables and their structure.
Tables are used to display data in rows and columns.

**Structure:**
```
<table> → Table container
<tr> → Row
<td> → Data cell
<th> → Header cell
```
**Attributes:**

* border
* cellpadding
* cellspacing
* colspan / rowspan

<br><br>

## 6. What are frames in HTML?
Frames divide a browser window into multiple sections where each section loads a different HTML document.

**Tags:**

```
<frameset>
<frame>
```

Note: Frames are outdated in HTML5.

<br><br>

## 7. What is a form? Explain its elements.

Forms are used to collect user input.

**Tags:**
```
<form>
<input>
<textarea>
<select>
```

**Input types:**

* text
* password
* radio
* checkbox
* submit


<br><br>

## 8. Explain 2-tier architecture.

* In 2-tier architecture:
    * Client directly communicates with database

**Example:**
User → Database

**Limitations:**
* Less secure
* Not scalable


<br><br>

## 9. What is XML? Explain its features.
XML (Extensible Markup Language) is used to store and transport data.

**Features:**
* Self-descriptive
* Platform independent
* Custom tags
* Hierarchical structure

<br><br>

## 10. What is a web server?

A web server stores and delivers web pages to clients using HTTP.

**Functions:**

* Handles requests
* Sends responses
* Hosts websites