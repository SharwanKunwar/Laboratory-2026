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