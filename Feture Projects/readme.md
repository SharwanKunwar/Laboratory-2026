# 🏠 roomFinder.np

roomFinder.np is a broker-free rental platform designed to connect property owners and room seekers directly through a secure, transparent, and digitally managed rental ecosystem.

---

## 🚀 Vision

In many rental markets, intermediaries charge unnecessary brokerage fees:

- Rs. 500 before room finding  
- Rs. 2000–3000 after securing a room  

roomFinder.np eliminates this dependency by enabling direct, verified interaction between owners and tenants while digitizing the entire rental lifecycle — from listing to billing and payment tracking.

### The Platform Enables:

- Direct Owner ↔ Seeker communication
- Structured and transparent rental workflow
- Identity verification for trust and safety
- Digital rent tracking and expense monitoring
- Automated monthly billing system
- Secure QR-based payment integration

---

## 🚧 Project Status

Currently under active development.

Core modules including role-based authentication, room listing, and request management are being implemented. Advanced billing automation and payment integrations are planned for upcoming releases.

---

# 👥 User Roles

The system follows a **Role-Based Access Control (RBAC)** model.

Users must select their role during authentication:

- 🏠 **Owner**
- 🔍 **Seeker**

Each role has a dedicated dashboard and permission-based access.

---

# 🔐 Authentication Flow

1. User selects role (Owner / Seeker)
2. Registers or logs in
3. System authenticates using JWT
4. Redirects to role-specific dashboard

---

# 🏠 OWNER MODULE

## 📊 Owner Dashboard

Owners can:

- Create and manage room listings
- View and respond to rental requests
- Approve or reject room tour requests
- Track active tenants
- Generate monthly bills
- Monitor payment status
- Manage profile and property details

---

## 🏘️ Room Listing Process

To list a room, the owner must provide:

### 📸 Media
- Minimum 4 high-quality images

### 🤖 AI-Assisted Description
- Auto-generated description
- Editable by the owner to match tone and preference

### 🛠 Room Features
- Water Availability
- Parking Facility
- Internet Access
- Attached / Shared Bathroom
- Room Type (Single / Double / Flat)
- Contact Preference

### 📍 Location Integration
- Static map location
- Automatically attached during listing
- No live tracking for privacy

### 💰 Cost Configuration
Set during listing:

- Fixed Room Rent
- Water Cost
- Trash Cost
- Internet Cost
- Electricity Cost (Per Unit Rate)

---

## 👤 Owner Profile Requirements

To maintain platform integrity, owners must submit:

- House Number
- Basic Identification
- Bank Details (for payment processing)

---

# 🔍 SEEKER MODULE

## 📊 Seeker Dashboard

Seekers can:

- Browse and filter room listings
- Scroll dynamic room feed
- View availability indicators
- Send rental requests
- Request room tours (after approval)
- Track rental expenses
- Monitor rental duration
- Pay rent via QR
- Raise issues or notifications

---

## 📜 Room Feed Structure

Each Room Card Displays:

- 4+ Images
- Availability Status (Available / Not Available)
- Detailed Price Breakdown
- Location Preview
- Key Features Summary

---

## 📩 Request & Approval Workflow

1. Seeker sends a room request
2. Owner reviews and accepts or rejects
3. After acceptance → Seeker can request a room tour
4. Owner approves tour request
5. Mutual agreement leads to rental confirmation

This structured flow prevents unauthorized contact and increases trust.

---

# ✅ Rental Confirmation Flow

Once both parties agree:

- Seeker is officially attached to the room in the Owner Dashboard
- Owner can view complete tenant details

### Seeker Dashboard Displays:

- Room Information
- Owner Details
- Rental Duration
- Expense History
- QR Payment Option

---

# 🆔 Seeker Verification

To ensure authenticity:

Seeker must upload one of the following:

- National ID (Citizenship Card – Front & Back)  
OR  
- Driving License  

This strengthens platform security and reduces fraudulent activity.

---

# 💳 Smart Monthly Billing System

## ⏳ Automated 30-Day Billing Cycle

After 30 days:

Owner receives system notification:

> "Monthly billing cycle completed. Please generate bill."

---

## ⚡ Electricity Calculation Logic

Owner inputs:

- Total Units Consumed

System calculates:

Electricity Cost = Units × Per Unit Rate

---

## 🧾 Final Monthly Bill Includes:

- Fixed Room Rent
- Water Cost
- Trash Cost
- Internet Cost
- Electricity Cost

Total amount is automatically computed.

---

## 🔔 Payment Notification Process

1. Owner generates and sends bill
2. Seeker receives detailed breakdown
3. QR Code is generated for payment
4. Seeker completes payment
5. Owner confirms receipt

---

# 📊 Expense & Rental Tracking

## Seeker Can Monitor:

- Total Expenses
- Monthly Payment Breakdown
- Rental Duration (Days Passed)
- Payment History

## Owner Can Monitor:

- Active Tenants
- Pending Payments
- Earnings Overview
- Rental History

---

# 🎯 Problem Being Solved

Traditional rental systems rely heavily on brokers who:

- Charge upfront fees before room allocation
- Demand additional commission after successful renting
- Offer limited transparency

roomFinder.np addresses this by:

- Removing intermediaries
- Enabling direct verified communication
- Digitizing billing and tracking
- Creating a structured and accountable rental workflow

---

# 🔐 Security & Trust Features

- Role-Based Authentication
- JWT-secured APIs
- Identity Verification for Seekers
- Owner Verification
- Controlled Approval Workflow
- Structured Payment Confirmation
- Privacy-first location handling

---

# 🛠 Technology Stack

## Backend
- Spring Boot
- PostgreSQL
- JWT Authentication
- RESTful APIs

## Frontend
- React.js
- Tailwind CSS

## Mobile (Planned)
- Android (Java/XML)

## Integrations
- Google Maps API (Static Location)
- AI Description Generator API
- QR Payment Gateway

---

# 📈 Future Enhancements

- Rating & Review System
- Digital Rental Agreement (PDF Generation)
- E-Signature Integration
- Real-Time Chat System
- AI-Based Price Recommendation
- Fraud Detection System
- Subscription Model for Property Owners

---

# 🧠 What Makes roomFinder.np Unique

roomFinder.np is not merely a room listing platform.

It is:

- A Rental Lifecycle Management System
- A Digital Billing Engine
- A Tenant Tracking Platform
- A Broker-Free Rental Ecosystem

---

# 🏁 Conclusion

roomFinder.np aims to modernize the rental experience by:

- Empowering owners with structured property management
- Protecting seekers from unnecessary brokerage fees
- Automating rent calculation and billing
- Ensuring verification and transparency at every step

The platform is built with scalability, security, and real-world practicality in mind.

---

# 👨‍💻 Developed By

**Sharwan Jung Kunwar**  
Backend-Focused Full Stack Developer  
Java | Spring Boot | PostgreSQL | React