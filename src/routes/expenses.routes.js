const { Router } = require("express");
const {
  getAllExpenses,
  createExpenses,
} = require("../controllers/expenses.controllers");
const router = Router();

router.get("/expenses", getAllExpenses);
router.post("/expenses", createExpenses);

module.exports = router;
