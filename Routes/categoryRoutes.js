const express = require('express');
const router = express.Router();
const catController = require("../Controllers/categoryController");
router.get("/",catController.getAllCategories)
router.post("/",catController.createCategory);

module.exports = router;