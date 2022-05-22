const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

connection.connect((error) => {
  error ? console.log("error") : console.log("connected");
});

module.exports = connection;
