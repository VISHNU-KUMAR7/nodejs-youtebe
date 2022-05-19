const { response } = require("express");
const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

app.set("view engine", "ejs");

app.get("", (_, response) => {
  response.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, response) => {
  response.sendFile(`${publicPath}/home.html`);
});

app.get("/profile", (_, response) => {
  const data = {
    name: "vishnu Kumar",
    email: "test@test.com",
    mobileNo: "341234245"
  }
  response.render("profile.ejs",{data});
});

app.get("/helpme", (_, response) => {
  response.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, response) => {
  response.sendFile(`${publicPath}/pagenotfound.html`);
});

app.listen(5000);
