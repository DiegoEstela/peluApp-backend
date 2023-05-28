const { Router } = require("express");
const {
  getAllCustomer,
  createCustomers,
  updateCustomers,
} = require("../controllers/customers.controllers");
const router = Router();

router.get("/customers", getAllCustomer);
router.post("/customers", createCustomers);
router.put("/customers/:id", updateCustomers);

module.exports = router;
