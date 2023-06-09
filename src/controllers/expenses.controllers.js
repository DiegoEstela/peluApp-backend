const pool = require("../db/index");
const moment = require("moment-timezone");

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
    let resultAccount;
    const { idUsuario, idServicio, nombreServicio, monto, metodoPago } =
      req.body;
    const zonaHoraria = moment.tz.guess();
    const fechaLocal = moment().tz(zonaHoraria);
    const fecha = fechaLocal.format("YYYY-MM-DD");
    const query =
      "INSERT INTO expenses (fecha,idUsuario, idServicio, nombreServicio,  monto ,metodoPago) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [
      fecha,
      idUsuario,
      idServicio,
      nombreServicio,
      monto,
      metodoPago,
    ];
    const result = await pool.query(query, values);
    if (result) {
      const montoNegativo = monto > 0 ? -monto : monto;
      const queryAccount =
        "INSERT INTO account (fecha, idUsuario, nombreServicio, monto, metodoPago ) VALUES ($1, $2, $3, $4, $5)";
      const valuesAccount = [
        fecha,
        idUsuario,
        nombreServicio,
        montoNegativo,
        metodoPago,
      ];
      resultAccount = await pool.query(queryAccount, valuesAccount);
    }

    if (resultAccount) {
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
