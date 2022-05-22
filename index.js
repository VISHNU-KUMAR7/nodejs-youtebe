const { request } = require("express");
const { response } = require("express");
const express = require("express");
const app = express();

const connection = require("./config");

app.get("/", (request, response) => {
  connection.query("Select * from users", (error, result) => {
    error ? console.log("error") : response.send(result);
  });
});


//middleware
app.use(express.json());

app.post("/", (request, response) => {
  const data = { name: "root", password: "root" };
  connection.query(
    "insert INTO users SET?",
    request.body,
    (error, result, fields) => {
      error ? console.log("error") : response.send(result);
    }
  );
});

app.listen(5000);
