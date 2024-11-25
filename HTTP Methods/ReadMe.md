HTTP methods are verbs used to indicate the desired action to be performed on a given resource in web applications. In **Node.js**, the `http` module allows us to handle these methods when building a server. Here's an explanation of common HTTP methods:

---

### **HTTP Methods and Their Purpose**

1. **GET**  
   - **Purpose**: Retrieve data from the server.
   - **Usage**: For requesting a resource (e.g., webpage, API data).
   - **Example**: A browser requesting a webpage or a client fetching data from an API.
   - **Node.js Handling**:
     ```javascript
     if (req.method === "GET") {
         res.end("GET Request Received");
     }
     ```

2. **POST**  
   - **Purpose**: Submit data to the server to create a new resource.
   - **Usage**: Used in forms or APIs to send data.
   - **Example**: Submitting a registration form.
   - **Node.js Handling**:
     ```javascript
     if (req.method === "POST") {
         res.end("POST Request Received");
     }
     ```

3. **PUT**  
   - **Purpose**: Update an existing resource or create it if it doesn't exist.
   - **Usage**: Used in REST APIs to update or replace resources.
   - **Example**: Updating a user's profile data.
   - **Node.js Handling**:
     ```javascript
     if (req.method === "PUT") {
         res.end("PUT Request Received");
     }
     ```

4. **PATCH**  
   - **Purpose**: Partially update an existing resource.
   - **Usage**: When you only need to modify specific fields of a resource.
   - **Example**: Updating just a user's email address.
   - **Node.js Handling**:
     ```javascript
     if (req.method === "PATCH") {
         res.end("PATCH Request Received");
     }
     ```

5. **DELETE**  
   - **Purpose**: Remove a resource from the server.
   - **Usage**: When you want to delete data (e.g., user account, file).
   - **Example**: Deleting a blog post.
   - **Node.js Handling**:
     ```javascript
     if (req.method === "DELETE") {
         res.end("DELETE Request Received");
     }
     ```

---

## **Key Points**
1. **`req.method`**: Contains the HTTP method (e.g., `GET`, `POST`).
2. **RESTful APIs**: HTTP methods are the foundation of REST APIs for CRUD operations.
3. **Middleware Libraries**: In production, frameworks like **Express.js** simplify handling HTTP methods.

### Example CRUD Operations with HTTP Methods
| **Operation** | **HTTP Method** | **URL Example**       |
|---------------|-----------------|-----------------------|
| Create        | POST            | `/users`              |
| Read          | GET             | `/users` or `/users/1`|
| Update        | PUT / PATCH     | `/users/1`            |
| Delete        | DELETE          | `/users/1`            |