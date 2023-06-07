const pool = require("../db/index");

const getAllAccounts = async (req, res) => {
  try {
    const query = "SELECT * FROM account";
    const result = await pool.query(query);
    const accounts = result.rows;
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllAccounts,
};
