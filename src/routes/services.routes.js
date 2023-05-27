const { Router } = require("express");
const { createServices } = require("../controllers/user.controllers");
const router = Router();

router.post("/services", createServices);

module.exports = router;
