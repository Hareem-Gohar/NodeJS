const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();

// Middleware to log requests
app.use ((req, res , next)=>{
    const log = `${new Date().toString()} - Method: ${req.method} - URL: ${req.url}\n`;
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error("Failed to write log to file:", err);
        }
    })
    console.log(`Middleware executed for ${req.method} ${req.url}`);
    next();
})


// Route to get users
app.get('/users', (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.status(200).json(users);
})

// Start the server
app.listen(8000, () => console.log("Server Started on port 8000."));






