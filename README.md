# Backend Developer Assignment

## Overview
This project is a user profile management API with authentication using JWT. It allows users to register, retrieve, and update their profiles securely.

## Tech Stack
- **Backend:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)

---

## Setup Instructions

### 1. Clone the Repository
```sh
git clone <repository_url>
cd <project_folder>
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Create a `.env` File
Create a `.env` file in the root directory and add the following environment variables:
```env
PORT=5000
MONGO_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_secret_key>
```

### 4. Start the Server
```sh
npm start
```

The server will start at `http://localhost:5000/`

---

## API Endpoints

| Method | Endpoint              | Description                     | Auth Required |
|--------|-----------------------|---------------------------------|---------------|
| POST   | `/api/users/register` | Register a new user            | ❌ No         |
| GET    | `/api/users/profile`  | Get logged-in user profile     | ✅ Yes        |
| PUT    | `/api/users/profile`  | Update user profile            | ✅ Yes        |


## Sample `.env` File
```env
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/myDatabase
JWT_SECRET=mysecretkey
```

---



