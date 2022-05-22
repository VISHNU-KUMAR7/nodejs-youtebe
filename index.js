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

app.put("/:id", (request, response) => {
  //   const data = ["user", "user", 1]; //static data
  const data = [request.body.name, request.body.password, request.params.id];
  connection.query(
    "UPDATE users SET name = ?, password = ? where id = ?  ",
    data,
    (error, result, fields) => {
      error ? console.log(error) : response.send(result);
    }
  );
  //   response.send("Put Done");
});

app.delete("/:id", (request, response) => {
  const data = [request.params.id];
  connection.query(
    "DELETE FROM users Where id = ?",
    data,
    (error, result, fields) => {
      error ? console.log("error") : console.log(result);
    }
  );
  //   response.send(request.params.id);
});

app.listen(5000);
