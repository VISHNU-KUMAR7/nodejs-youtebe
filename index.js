const { response } = require("express");
const express = require("express");
const { resolve } = require("path");
const reqFilter = require("./middleware");
const app = express();
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter);
app.get("/", (request, response) => {
  response.send("Welcome to Home page ");
});

app.get("/user", (request, response) => {
  response.send("Welcome to User page");
});

route.get("/about", (request, response) => {
  response.send("Welcome to about page");
});

route.get("/contact", (request, response) => {
  response.send("Welcome to Contact page");
});

app.use("/", route);

app.listen(5000);
