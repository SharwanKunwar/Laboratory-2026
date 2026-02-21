# System Analysis and Design mid-term modal – 5 Marks Solutions

---

## 11. Define System. Explain Different Types of System.

### Definition:
A **system** is a set of interrelated components that work together to achieve a common goal by accepting input, processing it, and producing output.

### Types of System:
1. **Physical System** – Tangible system (e.g., computer hardware).
2. **Abstract System** – Conceptual system (e.g., mathematical model).
3. **Open System** – Interacts with environment (e.g., business organization).
4. **Closed System** – Does not interact with environment.
5. **Deterministic System** – Predictable output (e.g., calculator).
6. **Probabilistic System** – Uncertain output (e.g., weather system).
7. **Manual System** – Operated manually by humans.
8. **Computer-Based System** – Uses computer technology.

---

## 12. Define Off-the-Shelf Software. Explain Different Origins of Software.

### Definition:
**Off-the-shelf software** is ready-made software available for purchase and general use.

### Origins of Software:
1. **In-house Development** – Developed within the organization.
2. **Outsourcing** – Developed by external vendor/company.
3. **Off-the-shelf Package** – Purchased ready-made software.
4. **Open-source Software** – Free and modifiable software.
5. **Customized Software** – Modified version of existing software.

---

## 13. Define Corporate Strategic Planning. Explain Role of System Development.

### Definition:
**Corporate Strategic Planning** is the process of setting long-term goals and determining actions to achieve competitive advantage.

### Role of System Development:
- Provides timely and accurate information.
- Improves decision-making.
- Enhances productivity.
- Supports automation.
- Aligns IT with business goals.
- Improves competitive advantage.

---

## 14. Define Steering Committee. Explain Evaluation Criteria.

### Definition:
A **Steering Committee** is a group of senior managers who supervise and guide system development projects.

### Evaluation Criteria:
1. **Technical Feasibility** – Technology availability.
2. **Economic Feasibility** – Cost-benefit analysis.
3. **Operational Feasibility** – User acceptance.
4. **Schedule Feasibility** – Time constraints.
5. **Legal Feasibility** – Compliance with laws and regulations.

---

## 15. Types of Feasibility Assessment.

1. **Technical Feasibility** – Required technology and expertise available.
2. **Economic Feasibility** – Financial viability of the project.
3. **Operational Feasibility** – System usability in organization.
4. **Schedule Feasibility** – Completion within time limit.
5. **Legal Feasibility** – Compliance with legal requirements.

---

## 16. Define BPP. Explain Components with Format.

### Definition:
**BPP (Business Process Plan)** is a document that describes business objectives, processes, and implementation strategies.

### Components of BPP:
1. Executive Summary  
2. Business Objectives  
3. Market Analysis  
4. Organizational Structure  
5. Product/Service Description  
6. Marketing Strategy  
7. Financial Plan  

### Format:
- Title Page  
- Executive Summary  
- Main Content  
- Financial Statements  
- Conclusion  

---

## 17. Define Data Modeling. Explain Conceptual Data Modeling with Example.

### Definition:
**Data modeling** is the process of designing the structure of data in a database.

### Conceptual Data Modeling:
- High-level database design.
- Uses ER (Entity-Relationship) diagram.
- Identifies entities, attributes, and relationships.

### Example:
- **Student (StudentID, Name, Age)**
- **Course (CourseID, CourseName)**
- Relationship: Student enrolls in Course.

---

## 18. Define Normalization. Explain up to 3NF with Example.

### Definition:
**Normalization** is the process of organizing data to reduce redundancy and improve data integrity.

### First Normal Form (1NF):
- No repeating groups.
- Atomic values only.

Example:
Student(StudentID, Name, Subject)

---

### Second Normal Form (2NF):
- Must be in 1NF.
- No partial dependency.

---

### Third Normal Form (3NF):
- Must be in 2NF.
- No transitive dependency.

Example:

Instead of:
Student(StudentID, Name, DeptName, DeptHead)

Divide into:

Student(StudentID, Name, DeptID)

Department(DeptID, DeptName, DeptHead)

---