const { Router } = require("express");
const {
  getAllCustomer,
  createCustomers,
  updateCustomers,
  unsubscribeCustomers,
} = require("../controllers/customers.controllers");
const router = Router();

router.get("/customers", getAllCustomer);
router.post("/customers", createCustomers);
router.put("/customers/:id", updateCustomers);
router.put("/unsubscribeCustomers/:id", unsubscribeCustomers);

module.exports = router;
