const { Router } = require("express");
const {
  getAllServices,
  createServices,
} = require("../controllers/services.controllers");
const router = Router();

router.get("/services", getAllServices);
router.post("/services", createServices);

module.exports = router;
