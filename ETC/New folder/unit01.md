# Unit I – HTML & CSS  
## Most Expected 5 Marks Answers

---

# 1. Structure of an HTML Document

An **HTML document** is the basic structure used to create a web page. It consists of several tags that define the layout and content of the page.

## Basic Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is my first HTML page.</p>
</body>
</html>
```

## Explanation

    <!DOCTYPE html> – Declares the HTML version used in the document.
    <html> – Root element of the HTML page.
    <head> – Contains metadata like title, styles, and scripts.
    <title> – Displays the title of the webpage in the browser tab.
    <body> – Contains the visible content such as text, images, and links.


### Conclusion:
The structure of an HTML document helps organize the content of a webpage and allows browsers to display it properly


<br><br>

# 2. HTML Formatting Tags

HTML formatting tags are used to change the appearance and style of text on a webpage.

| Tag        | Description              |
| ---------- | ------------------------ |
| `<b>`      | Displays text in bold    |
| `<i>`      | Displays text in italic  |
| `<u>`      | Underlines the text      |
| `<strong>` | Indicates important text |
| `<em>`     | Emphasized text          |
| `<sup>`    | Superscript text         |
| `<sub>`    | Subscript text           |

### Example:
```HTML
<p>This is <b>bold</b> text.</p>
<p>This is <i>italic</i> text.</p>
<p>H<sub>2</sub>O and x<sup>2</sup></p>
```
### Conclusion:
Formatting tags improve the readability and presentation of text in a webpage


<br><br>

# 3. HTML Tables and Their Structure
HTML tables are used to display data in the form of rows and columns.

| Tag       | Description            |
| --------- | ---------------------- |
| `<table>` | Defines a table        |
| `<tr>`    | Defines a table row    |
| `<th>`    | Defines a table header |
| `<td>`    | Defines a table cell   |

### Example
```HTML
<table border="1">
<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>John</td>
<td>20</td>
</tr>
</table>
```

### Conclusion:
Tables help organize and present structured information clearly.


<br><br>

# 4. HTML Forms

HTML forms are used to collect user input such as names, emails, passwords, and other data.

```HTML
<form action="submit.php" method="post">
Name: <input type="text" name="username"><br>
Password: <input type="password" name="password"><br>

<input type="submit" value="Submit">
<input type="reset" value="Reset">
</form>
```

### Common Input Types
* Text
* Password
* Radio button
* Checkbox
* Submit button
* Reset button
* File upload

### Conclusion:
Forms allow users to enter data that can be processed by a server.


<br><br>

# 5. Image Maps in HTML
An Image Map allows different areas of an image to act as clickable links.

```HTML
<img src="map.jpg" usemap="#imagemap">

<map name="imagemap">
<area shape="rect" coords="0,0,100,100" href="page1.html">
</map>
```

## Types of Image Maps
* Client-side image map
* Server-side image map


### Conclusion:
Image maps make images interactive by allowing multiple clickable regions.



# 6. Frames in HTML

Frames are used to divide a browser window into multiple sections where different HTML documents can be displayed.

### Example

```HTML
<frameset cols="50%,50%">
<frame src="page1.html">
<frame src="page2.html">
</frameset>
```

## Important Tags
```HTML
<frameset> – Defines the layout of frames
<frame> – Displays the webpage inside a frame
```

### Conclusion:
Frames allow multiple webpages to be displayed in a single browser window.