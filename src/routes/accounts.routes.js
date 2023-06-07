const { Router } = require("express");
const { getAllAccounts } = require("../controllers/accounts.controllers");

const router = Router();

router.get("/accounts", getAllAccounts);

module.exports = router;
