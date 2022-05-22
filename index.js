const express = require("express");
require("./config");
const Product = require("./product");
const app = express();

app.use(express.json);

app.get("/search/:key", async (request, response) => {
  const data = await new Product.find(
    {
      "$or":[
        {name:{$regex: request.params.key}},
        {brand:{$regex: request.params.key}}
      ]
    }
    )
  response.send("done");
});

app.listen(5000);
