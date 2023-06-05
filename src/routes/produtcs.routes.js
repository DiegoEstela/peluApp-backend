const { Router } = require("express");
const {
  getAllProducts,
  createProducts,
  updateProducts,
  CancelProduct,
} = require("../controllers/products.controllers");
const router = Router();

router.get("/products", getAllProducts);
router.post("/products", createProducts);
router.put("/products/:id", updateProducts);
router.put("/cancelproducts/:id", CancelProduct);

module.exports = router;
