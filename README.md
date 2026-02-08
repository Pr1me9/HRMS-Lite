# 🌌 HRMS Lite -- Employee & Attendance Management System

HRMS Lite is a full-stack web application designed to manage employee
records and track attendance efficiently.\
Built using the MERN stack and deployed to production, the system
focuses on clean architecture, RESTful APIs, and real-world deployment
practices.

------------------------------------------------------------------------

## 🚀 Live Application

https://hrms-lite-taupe.vercel.app

------------------------------------------------------------------------

## ✨ Features

### 👨‍💼 Employee Management

-   Add new employees with:
    -   Unique Employee ID
    -   Full Name
    -   Valid Email Address
    -   Department
-   View all employees
-   Delete employee records
-   Duplicate employee ID prevention
-   Server-side validation with meaningful error messages

### 📅 Attendance Management

-   Mark attendance (Present / Absent)
-   Select attendance date
-   View attendance records per employee
-   Data stored securely in MongoDB

------------------------------------------------------------------------

## 🛠 Tech Stack

### Frontend

-   React (Vite)
-   Axios
-   Custom Galaxy-Themed CSS UI
-   Deployed on Vercel

### Backend

-   Node.js
-   Express.js
-   MongoDB Atlas
-   Mongoose ODM
-   Deployed on Render

------------------------------------------------------------------------

## ⚙️ Local Setup

### 1️⃣ Clone the Repository

git clone https://github.com/Pr1me9/HRMS-Lite.git\
cd HRMS-Lite

------------------------------------------------------------------------

### 2️⃣ Backend Setup

cd backend\
npm install

Create a `.env` file inside the backend folder:

MONGO_URI=your_mongodb_connection_string\
PORT=5000

Start the backend:

npm start

Server runs at:\
http://localhost:5000

------------------------------------------------------------------------

### 3️⃣ Frontend Setup

cd frontend\
npm install

Create a `.env` file inside the frontend folder:

VITE_API_URL=http://localhost:5000/api

Start the frontend:

npm run dev

Open in browser:\
http://localhost:5173

------------------------------------------------------------------------

## 🧠 Technical Highlights

-   RESTful API architecture
-   Proper HTTP status codes
-   Centralized error handling
-   Server-side validation
-   MongoDB ObjectId referencing
-   CORS configuration for production
-   Environment variable management
-   Independent frontend and backend deployment

------------------------------------------------------------------------

## 📌 Assumptions

-   Single administrator (no authentication required)
-   Attendance recorded per employee per date
-   No payroll, leave, or advanced HR features
-   Scope limited to assignment requirements

------------------------------------------------------------------------

## 👨‍💻 Developer

Developed by **Abhinav Jha**\
HRMS Lite © 2026
