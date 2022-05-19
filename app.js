const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("hello world");
    resp.end();
  })
  .listen(4500);
