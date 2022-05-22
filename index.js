const express = require("express");
const app = express();

const connection = require("./config");

app.get("/", (request, response) => {
  connection.query("Select * from users", (error, result) => {
    error ? console.log("error") : response.send(result);
  });
});

app.listen(5000);
