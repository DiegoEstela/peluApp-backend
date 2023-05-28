const { Router } = require("express");
const {
  getAlServices,
  createServices,
} = require("../controllers/services.controllers");
const router = Router();

router.get("/services", getAlServices);
router.post("/services", createServices);

module.exports = router;
