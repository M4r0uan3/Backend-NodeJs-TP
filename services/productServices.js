const Product = require("../Models/Product");

const getProducts = async (req, res) => {
  return await Product.find().populate("category");
};

const getProductById = async (idP) => {
  return await Product.findOne({ _id: idP });
};
const addProduct = async (product) => {
  return await Product.create(product);
};

const deleteProduct = async (idP) => {
  return await Product.deleteOne({ _id: idP });
};

const updateProduct = async (product) => {
  return await Product.findByIdAndUpdate(product._id, product);
};

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
