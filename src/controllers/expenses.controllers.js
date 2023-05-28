const pool = require("../db/index");
const moment = require("moment");

const getAllExpenses = async (req, res) => {
  try {
    const allExpenses = await pool.query("SELECT * FROM expense");
    res.json(allExpenses.rows);
  } catch (error) {
    console.log(error);
  }
};

const createExpenses = async (req, res, next) => {
  try {
    const { servicio, valor } = req.body;
    const fecha = moment().format("YYYY-MM-DD");
    const query =
      "INSERT INTO expense (fecha, servicio, valor) VALUES ($1, $2, $3) RETURNING *";
    const values = [fecha, servicio, valor];
    const result = await pool.query(query, values);
    if (result) {
      res.send("creating a new expense");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllExpenses,
  createExpenses,
};