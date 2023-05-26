const { Router } = require("express");
const { getAllUser } = require("../controllers/user.controllers");
const router = Router();

router.get("/users", getAllUser);

module.exports = router;
