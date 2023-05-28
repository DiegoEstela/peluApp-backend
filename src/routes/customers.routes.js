const { Router } = require("express");
const {
  getAlCustomer,
  createCustomers,
  updateCustomers,
} = require("../controllers/customers.controllers");
const router = Router();

router.get("/customers", getAlCustomer);
router.post("/customers", createCustomers);
router.put("/customers/:id", updateCustomers);

module.exports = router;
