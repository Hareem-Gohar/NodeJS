```markdown
# Middleware, Headers, and Status Codes in RESTful APIs

This Repo demonstrates the use of **middleware**, **headers**, and **HTTP status codes** in a RESTful API built with Node.js and Express. These concepts are crucial for managing request-response cycles, enhancing security, and providing meaningful responses to clients.

---

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Endpoints](#endpoints)
- [Middleware](#middleware)
- [Headers](#headers)
- [Status Codes](#status-codes)

---

## Introduction

In this:
- **Middleware** functions intercept and process requests and responses.
- **Headers** carry additional metadata in requests and responses.
- **Status codes** inform clients about the result of their requests.

This project showcases how these elements work together to create a robust and secure API.

---

## Key Features

- Middleware for logging, authentication, and error handling.
- Use of HTTP headers for metadata such as `Content-Type` and `Authorization`.
- Proper use of status codes for successful responses, client errors, and server errors.
- JSON-based responses for ease of integration with clients.

---



## Endpoints

| Method | Endpoint       | Description                         |
|--------|----------------|-------------------------------------|
| GET    | `/`            | Home route with a welcome message. |
| GET    | `/users`       | Fetch all users.                   |
| POST   | `/users`       | Create a new user.                 |
| PUT    | `/users/:id`   | Update a user by ID.               |
| DELETE | `/users/:id`   | Delete a user by ID.               |

---

## Middleware

Middleware is used to enhance the API with features like:

- **Request Logging**: Logs incoming requests to the console.
- **Authentication**: Ensures users provide valid credentials via headers.
- **Error Handling**: Catches errors and sends appropriate responses.

### Example: Request Logger Middleware
```javascript
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});
```

---

## Headers

Headers provide additional context for requests and responses. This project uses headers like:

- `Content-Type`: Specifies the type of data (e.g., `application/json`).
- `Authorization`: Carries authentication tokens for secure routes.

### Example: Setting Headers
```javascript
res.setHeader('Content-Type', 'application/json');
```

---

## Status Codes

The API responds with appropriate status codes for each operation:

- **200 OK**: Request was successful.
- **201 Created**: Resource was created successfully.
- **400 Bad Request**: Client sent an invalid request.
- **401 Unauthorized**: Authentication failed or was not provided.
- **404 Not Found**: Resource does not exist.
- **500 Internal Server Error**: Server encountered an error.

### Example: Sending a Status Code
```javascript
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the API' });
});
```

---

```