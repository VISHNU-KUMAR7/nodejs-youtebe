const { response } = require("express");
const { request } = require("express");
const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

app.post("/create", async (request, response) => {
  let data = new Product(request.body);
  let result = await data.save();
  console.log(request.body);
  response.send("Done");
});

app.get("/list", async (request, response) => {
  let data = await new Product.find();
  response.send(data);
});

app.delete("/delete/:_id", async (request, response) => {
  console.log(request.params.id);
  let data = await Product.deleteOne(request.params);
  request.send("done");
});

app.put("/update/:_id", async (request, response) => {
  const data = await new Product.updateOne(request.params, {
    $set: request.body,
  });
});

app.listen(5000);
