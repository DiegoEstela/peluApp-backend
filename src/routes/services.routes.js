const { Router } = require("express");
const { createServices } = require("../controllers/services.controllers");
const router = Router();

router.post("/services", createServices);

module.exports = router;
