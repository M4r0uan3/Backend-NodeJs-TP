const productServices = require("../services/productServices");

const getAllProducts = async (req, res) => {
  try {
    const products = await productServices.getProducts();
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productServices.getProductById(req.params.id);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addProduct = async (req, res) => {
  try {
    const product = await productServices.addProduct(req.body);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await productServices.deleteProduct(req.params.id);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await productServices.updateProduct(req.body);
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  deleteProduct,
  updateProduct,
};
