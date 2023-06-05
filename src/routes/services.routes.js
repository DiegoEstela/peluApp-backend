const { Router } = require("express");
const {
  getAllServices,
  createServices,
  updateServices,
} = require("../controllers/services.controllers");
const router = Router();

router.get("/services", getAllServices);
router.post("/services", createServices);
router.put("/services/:id", updateServices);

module.exports = router;
