const { Router } = require("express");
const {
  getAlCustomer,
  createCostumers,
  createServices,
} = require("../controllers/user.controllers");
const router = Router();

router.get("/customers", getAlCustomer);
router.post("/customers", createCostumers);
router.post("/services", createServices);

module.exports = router;
