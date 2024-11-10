

# Node.js Overview

---

Node.js is a **JavaScript runtime environment** that allows developers to execute JavaScript code outside of the browser. JavaScript, traditionally limited to client-side applications, can now be used for server-side rendering, thanks to Node.js.

Created by **Ryan Dahl**, Node.js embeds the **V8 JavaScript engine** (used in Chrome) into C++, enabling JavaScript to run on a machine’s terminal or command line. This makes it possible to use JavaScript for tasks beyond the browser, such as building scalable backend applications.

## Key Features

1. **Event-Driven Model**  
   Node.js is designed to handle multiple I/O operations efficiently. The event-driven architecture ensures that I/O tasks are non-blocking, enhancing performance in real-time applications.

2. **Single-Threaded but Asynchronous**  
   While Node.js runs on a single thread, its asynchronous nature allows multiple operations to execute simultaneously without blocking the main thread, making it highly efficient.This enables tasks to be processed without waiting for previous ones to complete, improving performance in high-traffic situations.

3. **Server-Side Scripting**  
   Node.js extends JavaScript from client-side to server-side scripting, allowing developers to build complete web applications using a single language. It also supports other tasks such as creating microservices, command-line tools, and APIs.

4. **NPM (Node Package Manager)**  
   Node.js comes with **NPM**, which provides access to thousands of open-source libraries and packages. This ecosystem accelerates development and fosters code reuse across projects.

## Important Notes

- **No DOM Manipulation**  
   Unlike traditional browser-based JavaScript, Node.js does not support DOM manipulation or include window objects, as it is designed to run server-side.


## Modular Programming in NodeJS

---

Achieved by breaking the codebase into smaller , reuseable chunks known as **Modules**. Each Module contains Specific Functionality. and  can be imported into other files or module for usage. It makes the codebase more Scable . Manageble and Reusable

### Steps for making a module

1. **Create Separate Files (Modules)**
   Break down your code into smaller files that each handle a specific piece of functionality.
2. **Export Functionality**
   Use module.exports or exports to expose parts of a module.
3. **Import Modules in Other Files**
   Use require() to import modules into other files.


###Example is in code.


