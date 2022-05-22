const express = require("express");
const EventEmitter = require("events");
const { response } = require("express");
const app = express();
const event = new EventEmitter();

let count = 0
event.on("countAPI",()=>{
    count++;
    console.log("Event called"+count)
})


app.get("/", (request, response) => {
  response.send("api call");
  event.emit("countAPI")
});

app.get("/update", (request, response) => {
  response.send("update api called");
});

app.get("/delete", (request, response) => {
  response.send("Delete api called");
});

app.listen(5000);
