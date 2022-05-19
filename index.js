const { response } = require("express");
const express = require("express");

const app = express();
app.get("", (request, response) => {
  response.send("hello this is Home page");
});

app.get("/about", (request, response) => {
  response.send("Hello this is About Page");
});

app.get('/help',(request, response)=>{
    response.send("this is the help ");
})

app.listen(5000);
