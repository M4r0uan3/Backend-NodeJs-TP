const express = require("express");
const productController = require("../Controllers/productController");
const router = express.Router();

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.addProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
