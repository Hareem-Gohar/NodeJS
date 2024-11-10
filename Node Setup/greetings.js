

// 1: Exporting greet1 using `exports` object directly

// exports.greet1 = (name) => {
//     return `Hello! ${name}`;
// }

// 2: Exporting greet2 and hello using `module.exports`
// greetings.js

// Define greet1, greet2, and hello functions
const greet1 = (name) => {
    return `Hello! ${name}`;
};

const greet2 = (name) => {
    return `Hello! ${name}`;
};

const hello = () => {
    return `Hello Ji!`;
};

// Export all functions using module.exports
module.exports = { greet1, greet2, hello };
