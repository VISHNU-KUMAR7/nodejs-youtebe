const { response } = require("express");
const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

app.post("/create", async (request, response) => {
  let data = new Product(request.body);
  let result = await data.save();
  console.log(request.body)
  response.send("Done");
});

app.listen(5000);
