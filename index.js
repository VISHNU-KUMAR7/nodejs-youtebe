const dbConnect = require("./mongodb");
// //1 way to handle dbConnect promise
// dbConnect().then((response) => {   //return promise
//   response
//     .find({})
//     .toArray()                     //return promise
//     .then((data) => {
//       console.log(data);
//     });
// });

//2nd way to handle dbConnect promise
const main = async () => {
  let data = await dbConnect();
  data = await data.find({}).toArray();
  console.log(data);
};

main();
