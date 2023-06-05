const pool = require("../db/index");
const moment = require("moment");

const getAllExpenses = async (req, res) => {
  try {
    const allExpenses = await pool.query("SELECT * FROM expenses");
    res.json(allExpenses.rows);
  } catch (error) {
    console.log(error);
  }
};

const createExpenses = async (req, res, next) => {
  try {
    const { idUsuario, idServicio, monto, metodoPago } = req.body;
    const fecha = moment().format("YYYY-MM-DD");
    const query =
      "INSERT INTO expenses (fecha,idUsuario, idServicio, monto ,metodoPago) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [fecha, idUsuario, idServicio, monto, metodoPago];
    const result = await pool.query(query, values);
    if (result) {
      res.status(200).json({ message: "creating a new expense" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllExpenses,
  createExpenses,
};
