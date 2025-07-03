//create http server using node js
const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url !== "/") {
    return res.end();
  }
  res.end("Hello Good!how r you  ");
});
server.listen(8000, () => {
  console.log("serveris running on port 8080");
});
