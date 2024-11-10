// Importing all functions using destructuring
const { greet1, greet2, hello } = require("./greetings");

// Calling greet1, greet2, and hello functions directly
console.log("First Greet Function (greet1) is:", greet1("John")); // Output: Hello! John
console.log("Second Greet Function (greet2) is:", greet2("Jane")); // Output: Hello! Jane
console.log("Third Greet Function (hello) is:", hello()); // Output: Hello Ji!

// Importing the entire greetings module to access greet1
const greet1Module = require('./greetings');

// Calling gree t1 from the module
console.log("First Greet Function (greet1) is:", greet1Module.greet1("John")); // Output: Hello! John
