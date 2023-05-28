const { Router } = require("express");
const {
  getAllRevenues,
  createRevenues,
} = require("../controllers/revenues.controllers");
const router = Router();

router.get("/revenues", getAllRevenues);
router.post("/revenues", createRevenues);

module.exports = router;
