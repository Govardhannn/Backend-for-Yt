# Backend Project

A professional Node.js/Express backend application with MongoDB integration, built with modern development practices.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Architecture](#project-architecture)
- [API Response Format](#api-response-format)
- [Dependencies](#dependencies)
- [Development Tools](#development-tools)

## 🎯 Overview

This is a scalable backend application built with:
- **Express.js** - Web framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Node.js** - Runtime environment
- **Cookie Parser** - HTTP cookie handling
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
backend-project-nov2/
├── src/
│   ├── app.js                 # Express app configuration
│   ├── index.js               # Application entry point
│   ├── constants.js           # Application constants
│   ├── controllers/           # Request handlers (TODO)
│   ├── models/                # Mongoose schemas (TODO)
│   ├── routes/                # API routes (TODO)
│   ├── middlewares/           # Custom middlewares (TODO)
│   ├── db/
│   │   └── index.js           # MongoDB connection configuration
│   └── utils/
│       ├── ApiResponse.js     # Standardized API response wrapper
│       ├── ApiError.js        # Custom error handling class
│       └── asyncHandler.js    # Async route handler wrapper
├── public/
│   └── temp/                  # Temporary file storage
├── .env                       # Environment variables
├── .gitignore                 # Git ignore rules
├── .prettierrc                # Code formatter configuration
├── .prettierignore            # Prettier ignore rules
├── package.json               # Project dependencies
└── README.md                  # This file
```

## 🚀 Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd backend-project-nov2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install devDependencies**
   ```bash
   npm install --save-dev nodemon prettier
   ```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
MONGODB_URI=mongodb://localhost:27017
CORS_ORIGIN=http://localhost:3000
PORT=5000
DB_NAME=jsonyt
```

**Variables Explanation:**
- `MONGODB_URI` - MongoDB connection string
- `CORS_ORIGIN` - Frontend URL for CORS policy
- `PORT` - Server port number
- `DB_NAME` - Database name (defined in [constants.js](src/constants.js))

### Prettier Configuration

The project uses Prettier for code formatting with the following settings:
- Single quotes: `false` (uses double quotes)
- Bracket spacing: `true`
- Tab width: `2` spaces
- Semicolons: `true`

## 🏃 Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

This command uses **nodemon** to automatically restart the server when files change.

### Production Mode
```bash
node src/index.js
```

## 🏗️ Project Architecture

### Core Components

#### 1. **[app.js](src/app.js)** - Express Configuration
- Sets up middleware stack
- Configures CORS with credential support
- Parses JSON requests (16KB limit)
- Handles URL-encoded data (16KB limit)
- Serves static files from `/public`
- Parses HTTP cookies

#### 2. **[index.js](src/index.js)** - Entry Point
- Loads environment variables via dotenv
- Initializes MongoDB connection
- Error handling for database connection

#### 3. **[db/index.js](src/db/index.js)** - Database Connection
- Connects to MongoDB using Mongoose
- Logs connection host information
- Implements error handling with process exit on failure

### Utility Classes

#### 4. **[ApiResponse.js](src/utils/ApiResponse.js)** - Response Standardization
```javascript
class ApiResponse {
    constructor(statusCode, data, message = "Success")
    // Properties: statusCode, data, message, success
}
```
**Usage:** Wrap all successful API responses for consistency

#### 5. **[ApiError.js](src/utils/ApiError.js)** - Error Handling
```javascript
class ApiError extends Error {
    constructor(statusCode, message, errors, stack)
    // Properties: statusCode, data, message, success, errors
}
```
**Usage:** Custom error class extending JavaScript Error for API error responses

#### 6. **[asyncHandler.js](src/utils/asyncHandler.js)** - Async Wrapper
```javascript
const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(err => next(err))
}
```
**Usage:** Wraps async route handlers to catch Promise rejections and pass to error middleware

## 📤 API Response Format

### Success Response
```json
{
  "statusCode": 200,
  "data": { /* response data */ },
  "message": "Success",
  "success": true
}
```

### Error Response
```json
{
  "statusCode": 400,
  "data": null,
  "message": "Error message",
  "success": false,
  "errors": [ /* error details */ ]
}
```

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^5.2.1 | Web framework |
| mongoose | ^9.0.0 | MongoDB ODM |
| cors | ^2.8.5 | Cross-origin requests |
| cookie-parser | ^1.4.7 | Cookie parsing |
| dotenv | ^17.2.3 | Environment variables |

## 🛠️ Development Tools

| Package | Version | Purpose |
|---------|---------|---------|
| nodemon | ^3.1.11 | Auto-reload on file changes |
| prettier | ^3.7.3 | Code formatter |

## 📝 Notes

- Database name is defined in [constants.js](src/constants.js)
- The project uses ES6 modules (type: "module" in package.json)
- Controllers, models, routes, and middlewares directories are prepared for future implementation
- Proper error handling and async operation management are in place

## 🔄 Next Steps

- [ ] Implement user models and schemas
- [ ] Create API routes for CRUD operations
- [ ] Build controllers for business logic
- [ ] Add authentication middlewares
- [ ] Implement request validation

---

**Author:** Govardhan Sahani  
**License:** ISC