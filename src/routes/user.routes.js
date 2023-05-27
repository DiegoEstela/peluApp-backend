const { Router } = require("express");
const {
  getAlCustomer,
  createCostumers,
} = require("../controllers/user.controllers");
const router = Router();

router.get("/customers", getAlCustomer);
router.post("/customers", createCostumers);

module.exports = router;
