const fs = require("fs");
const http = require("http");

// Create HTTP Server
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();

  // Log Request
  const log = `${Date.now()}: ${req.url} - New Request Received\n`;
  fs.appendFile("log.txt", log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("Internal Server Error");
    }
  });

  // Parse URL
  const myURL = new URL(req.url, `http://${req.headers.host}`);
  console.log(myURL);

  // Handle Routes
  switch (myURL.pathname) {
    case "/":
        const username = myURL.searchParams.get("myname");
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Hi ${username}! Welcome to my Home server`);
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
  }
});

// Start Server
server.listen(8000, () => console.log("Server Started on Port 8000"));
