const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({ name: String, price: Number });

  const ProductModle = mongoose.model("products", ProductSchema);
  let data = new ProductModle({ name: "m 48" , "price": 36478});
  let result = await data.save();
  console.log(result);
};

main();
