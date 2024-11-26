# RESTful API

This project demonstrates the creation of a RESTful API that follows the server-client architecture. The API allows clients (e.g., browsers, mobile apps) to interact with the server using standard HTTP methods to perform operations on resources such as users, products, and orders.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [API Endpoints](#api-endpoints)
- [HTTP Methods](#http-methods)
- [How It Works](#how-it-works)
- [Benefits of Server-Client Architecture](#benefits-of-server-client-architecture)
- [Rules for Creating a RESTful API](#rules-for-creating-a-restful-api)


---

## Overview

A **RESTful API** works as a bridge between the **client** (frontend application making requests) and the **server** (backend system processing the requests). This API follows the principles of REST, including statelessness, resource-based design, and standardized HTTP methods for operations like retrieving, creating, updating, and deleting resources.

---

## Key Features

- **Stateless**: Each request is independent, meaning the server does not store session data.
- **Resource-Based**: The API exposes resources (e.g., `/users`, `/products`), typically as URLs.
- **Uniform Interface**: Consistent access to all resources via standard conventions.
- **JSON Format**: Data is exchanged in JSON format for ease of understanding and use.

---

## API Endpoints

The API exposes the following endpoints:


- **GET /users**: Retrieves a list of all users.
- **GET /users/{id}**: Retrieves a specific user by their ID.
- **POST /users**: Adds a new user.
- **PUT /users/{id}**: Updates an existing user.
- **DELETE /users/{id}**: Deletes a specific user.

---

## HTTP Methods

The following HTTP methods are used to perform different operations on the API resources:

- **GET**: Retrieve data from the server (e.g., get a list of users or a specific product).
- **POST**: Create new data on the server (e.g., add a new user or product).
- **PUT**: Replaces the entire resource with the provided data. If some attributes are not included in the request, they will be removed or set to default/null in the updated resource.
- **PATCH**: Updates only the specified fields without affecting other attributes. Attributes not included in the request will remain unchanged.
- **DELETE**: Remove data (e.g., delete a user or product).

---

## How It Works

1. **Client Request**:  
   The client (browser, mobile app, etc.) makes a request to the server using one of the HTTP methods (GET, POST, PUT, DELETE).

2. **Server Processing**:  
   The server processes the request, performs the necessary action (e.g., querying a database or creating a new resource), and prepares the response.

3. **Server Response**:  
   The server responds with the data or a status code (e.g., 200 OK, 404 Not Found) in JSON format.

---

## Benefits of Server-Client Architecture

- **Separation of Concerns**: Clients handle the user interface, and servers manage data and logic.
- **Scalability**: Servers can support multiple clients, and the architecture can scale as needed.
- **Flexibility**: Clients can vary (browsers, mobile apps, etc.), and the same server can serve different types of clients.
- **Reusability**: APIs can be reused across different platforms and devices.

---

## Rules for Creating a RESTful API

To create a well-structured and reliable RESTful API, follow these rules:

1. **Use Proper HTTP Methods**:
   - `GET` for retrieving data.
   - `POST` for creating new data.
   - `PUT` or `PATCH` for updating data.
   - `DELETE` for deleting data.

2. **Use Meaningful Endpoints**:
   - Resource names should be nouns (e.g., `/users`, `/products`).
   - Use plural for collections (e.g., `/products`).

3. **Statelessness**:
   - Every request should contain all the information needed to process it.
   - The server does not store client session data.

4. **Return Proper HTTP Status Codes**:
   - `200 OK` for successful requests.
   - `201 Created` when a resource is created.
   - `404 Not Found` if the resource doesn't exist.
   - `500 Internal Server Error` for server issues.

5. **Support Filtering, Sorting, and Pagination**:
   - Use query parameters to filter and sort results.
   - Example: `/products?category=electronics&sort=price&page=2`.

6. **Use JSON for Data Representation**:
   - Send and receive data in JSON format for consistency and simplicity.

7. **Error Handling**:
   - Return clear and consistent error messages in JSON format.
   - Example: `{ "error": "Resource not found", "code": 404 }`.

8. **Authentication and Security**:
   - Use tokens (e.g., JWT) for secure communication.
   - Use HTTPS for encrypted communication.

9. **Version Your API**:
   - Include versioning in your endpoints (e.g., `/v1/users`).

10. **Documentation**:
    - Provide clear and comprehensive documentation for all API endpoints, methods, and responses.

---