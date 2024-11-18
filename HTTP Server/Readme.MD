# Basic HTTP Server in Node.js

## What is HTTP in Node.js?

HTTP in Node.js refers to the `http` module, which is built into Node.js to handle HTTP requests and responses. It allows you to create a server that can:
- Handle incoming HTTP requests.
- Send appropriate responses to clients (like browsers).

### Features of the HTTP Module:
1. **Core Module:** Built into Node.js, no installation required.
2. **Supports HTTP/HTTPS Protocols:** Handles web resource requests.
3. **Event-Driven:** Works asynchronously for efficiency and scalability.
4. **Customizable:** Allows tailored responses to client requests.

---

## How to Create a Basic Server in Node.js

### Steps:
1. **Import the `http` Module.**
2. **Create a Server:**
   Use the `http.createServer()` method.
3. **Listen to a Port:**
   Use the `.listen()` method to start the server.

---

### Example: Basic HTTP Server

```javascript
// Import the HTTP module
const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header and status code
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response back to the client
  res.end('Hello, World!');
});

// Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

# Explanation of Node.js HTTP Server Code

### `http.createServer((req, res) => {...})`
- **`req` (request):** 
  Contains details about the incoming request, such as:
  - URL (`req.url`)
  - Method (`req.method`)
  - Headers (`req.headers`)
- **`res` (response):** 
  Used to send a response back to the client.

---

### `res.writeHead(200, {'Content-Type': 'text/plain'})`
- **`200`:** Sets the HTTP status code to `200` (OK).
- **`Content-Type`:** Specifies the response type as plain text.

---

### `res.end('Hello, World!')`
- Ends the response and sends the message `"Hello, World!"` to the client.

---

### `server.listen(3000)`
- Starts the server and listens for requests on **port 3000**.
- Access the server in your browser by visiting: 

