const express = require("express");
const http = require('http');

const app = express();
app.get('/' , (req, res)=>{
    res.send('Hello! ' + req.query.name + ' youre on my Home Page');
})

//const server = http.createServer(app);
app.listen(8000, () => console.log("Server Started."))