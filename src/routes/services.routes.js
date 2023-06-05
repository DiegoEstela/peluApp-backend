const { Router } = require("express");
const {
  getAllServices,
  createServices,
  unsubscribeServices,
} = require("../controllers/services.controllers");
const router = Router();

router.get("/services", getAllServices);
router.post("/services", createServices);
router.put("/unsubscribeServices/:id", unsubscribeServices);

module.exports = router;
