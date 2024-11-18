const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //console.log("New Req Rec.");
  const log = `${Date.now()}: ${req.url} New Req Recieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch(req.url){
        case '/': 
        res.end("Hello from Server! You are at Home Page");
        break;
        case '/about': 
        res.end('hi! I am Hareem Gohar');
        break;
        default: 
        res.end("404 Not Found");
    }
  });
});
server.listen(8000, () => console.log("Server Started"));
