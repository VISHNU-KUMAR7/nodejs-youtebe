const { response } = require("express");
const express = require("express");
const { resolve } = require("path");
const app = express();

const reqFilter = (request, response, next) => {
  if (!request.query.age) {
    response.send("Please provide age");
  } else if (request.query.age <= 18) {
    response.send("Your are not elegible to welcome this page");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (request, response) => {
  response.send("Welcome to Home page ");
});

app.get("/user", (request, response) => {
  response.send("Welcome to User page");
});

app.listen(5000);
