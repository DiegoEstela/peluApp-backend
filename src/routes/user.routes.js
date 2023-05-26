const { Router } = require("express");
const {
  getAlCustomer,
  createCostumers,
} = require("../controllers/user.controllers");
const router = Router();

router.get("/costumers", getAlCustomer);
router.post("/costumers", createCostumers);

module.exports = router;
