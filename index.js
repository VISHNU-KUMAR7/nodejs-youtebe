const express = require("express");
const multer = require("multer");
const app = express();

//middleware
const upload = multer({
  storage: multer.diskStorage({
    destination: function (request, response, callback) {
      callback(null, "uploads"); //callback(null, foldername)
    },
    filename: function (request, file, callback) {
      callback(null, file.fieldname + "-" + Data.now() + ".jpg"); // callback(null,filename)
    },
  }),
}).single("user_file"); // single("key_of_the_field")

//url
app.post("/upload", upload, (request, response) => {
  response.send("file upload");
});

app.listen(5000);
