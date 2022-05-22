const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test",
});

// //check the connection
// connection.connect((error) => {
//   if (error) {
//     console.log("error");
//   } else {
//     console.log("connected");
//   }
// });


//fetch the data
connection.query("select * from users", (error, result)=>{
    console.log("result",result)
})
