const catService = require("../services/categoryServices");

const createCategory = async (req, res) => {
  try {
    const result = await catService.addCategory(req.body);
    res.status(200).json(result);
  } catch {
    res.status(500).json(error);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const result = await catService.getAllCategories();
    res.status(200).json(result);
  } catch {
    res.status(500).json(error);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
