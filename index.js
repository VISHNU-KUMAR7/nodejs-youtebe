const { response } = require("express");
const express = require("express");

const app = express();
app.get("", (request, response) => {
  response.send("<h1>hello this is Home page</h1>");
});

app.get("/about", (request, response) => {
  //   response.send("Hello this is About Page");
  response.send(
    `<input type='text' placeholder="user Name" />
      <button> Click me</button>`
  );
});

app.get("/help", (request, response) => {
  response.send({
    name: "vishnu",
    emailId: "test@test.com",
  });
});

app.listen(5000);
