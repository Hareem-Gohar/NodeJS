const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New Request Reieved\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    if (err) console.log(err);
  });
  const myURL = new URL(req.url, `http://${req.headers.host}`);
  console.log(myURL);

  switch (myURL.pathname) {
    case "/":
      const username = myURL.searchParams.get("myname") || "Guest";
      res.end(`Hi ${username}! Welcome to my Home server`);
      break;
    case "/aboutus":
        res.end("This is about us page");
        break;
    case "/search":
        const search = myURL.searchParams.get("search") || "No search query";
        res.end(`Your Results for ${search} is following:`);
        break;
    case "/signup":
        if(req.method === "GET"){
            res.end("This is signup page")
        }
        else if( req.method === "POST"){
            console.log("Succces!")
        }
        break;
    default:
        res.end("404 Error!");
  }
});
server.listen(8000, () => console.log("Server Started."));
