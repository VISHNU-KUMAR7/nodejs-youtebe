const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

const saveInDB = async () => {
  const ProductModle = mongoose.model("products", ProductSchema);
  let data = new ProductModle({
    name: "m 48",
    price: 36478,
    brand: "Blackbery",
    category: "mobile",
  });
  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.updateOne(
    { name: "m 48" },
    { $set: { price: 34567, brand: "maxx", category: "Mobile" } }
  );
  console.log(data);
};

const deleteInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.deleteOne({
    name: "vishnu",
  });
};

const findInDB = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = await Product.find({ brand: "maxx" });
  console.log(data);
};


findInDB();
