# 📘 Focus Planner  
### Smart Productivity & Task Management System

---

## 📌 Overview

**Focus Planner** is a modern task management web application designed to help users organize, prioritize, and manage daily tasks efficiently.

It provides a clean and structured interface that improves productivity through priority tagging, due date tracking, and organized task visualization.

---

## 🎯 Problem It Solves

Many users struggle with:
- Disorganized task lists  
- Missing deadlines  
- Lack of priority management  
- Poor productivity tracking  

Focus Planner provides a structured and visually organized solution to manage tasks effectively.

---

## 🚀 Features

- ✅ Add New Tasks  
- ✅ Delete Tasks  
- ✅ Set Task Priority (High / Medium / Low)  
- ✅ Priority Ribbon Indicator  
- ✅ Due Date Selection  
- ✅ Filter Tasks by Date  
- ✅ Task Notes Modal  
- ✅ Responsive Dashboard Layout  
- ✅ Lottie-based Error Page  
- ✅ Global State Management using Zustand  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Tailwind CSS  
- Ant Design  
- Zustand (State Management)  
- React Icons  
- Lottie Animations  

### Deployment
- Vercel  

---

## 🏗️ System Architecture

    User Interface (React + Tailwind + Ant Design)
                ↓
    State Management (Zustand)
                ↓
    Local In-Memory Data Storage


(Current version is frontend-based architecture.)

---

## 📂 Project Structure
    src/
    ├── components/
    │ ├── TaskCard.jsx
    │ ├── Navbar.jsx
    │
    ├── pages/
    │ ├── TaskPage.jsx
    │ ├── ErrorPage.jsx
    │
    ├── data/
    │ ├── taskStore.js
    │
    ├── App.jsx
    └── main.jsx


---

## 🎨 UI Components Used
* Ant Design Modal (Task Notes)
* Ant Design Badge.Ribbon (Priority Indicator)
* Ant Design DatePicker
* Ant Design Select
* Responsive Grid Layout


## 🔥 Challenges Faced
* Managing global state efficiently using Zustand
* Updating modal content dynamically
* Fixing Vercel refresh 404 issue
* Handling priority ribbon color logic
* Maintaining UI consistency

## 📈 Future Improvements
* 🔐 Add User Authentication (JWT)
* 💾 Backend Integration (Spring Boot)
* 🗄️ PostgreSQL Database Integration
* 🔄 Real-Time Updates
* 📊 Task Analytics Dashboard
* 🌙 Dark Mode
* 📱 Progressive Web App (PWA) Support
* Mobile responsive design


### ⭐ Project Status

    🟢 Actively Improving
        This project is continuously being enhanced with new features and optimizations.