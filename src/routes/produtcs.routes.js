const { Router } = require("express");
const {
  getAlProducts,
  createProducts,
  updateProducts,
} = require("../controllers/products.controllers");
const router = Router();

router.get("/products", getAlProducts);
router.post("/products", createProducts);
router.put("/products/:id", updateProducts);

module.exports = router;
