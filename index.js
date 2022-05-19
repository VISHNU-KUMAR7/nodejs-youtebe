const { response } = require("express");
const express = require("express");

const app = express();
app.get("", (request, response) => {
  response.send(
    `<h1>hello this is Home page</h1><a href="/about" > go to about page </a>`
  );
});

app.get("/about", (request, response) => {
  response.send(
    `<input type='text' placeholder="user Name" value = "${request.query.name}"/>
      <button> Click me</button>
      <a href="/" > Go to home page </a>`
  );
});

app.get("/help", (request, response) => {
  response.send({
    name: "vishnu",
    emailId: "test@test.com",
  });
});

app.listen(5000);
