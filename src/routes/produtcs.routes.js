const { Router } = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
} = require("../controllers/products.controllers");
const router = Router();

router.get("/products", getAllProducts);
router.post("/products", createProducts);
router.put("/products/:id", updateProducts);

module.exports = router;
