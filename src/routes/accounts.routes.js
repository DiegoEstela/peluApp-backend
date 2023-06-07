const { Router } = require("express");
const {
  getAllAccounts,
  getAllAccountsByDate,
} = require("../controllers/accounts.controllers");

const router = Router();

router.get("/accounts", getAllAccounts);
router.post("/accountsByDate", getAllAccountsByDate);

module.exports = router;
