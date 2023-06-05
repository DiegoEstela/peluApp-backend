const pool = require("../db/index");
const moment = require("moment-timezone");

const getAllRevenues = async (req, res) => {
  try {
    const allrevenues = await pool.query("SELECT * FROM revenues");
    res.json(allrevenues.rows);
  } catch (error) {
    console.log(error);
  }
};

const createRevenues = async (req, res, next) => {
  try {
    const { idUsuario, idCliente, idProducto, monto, metodoPago } = req.body;
    const zonaHoraria = moment.tz.guess();
    const fechaLocal = moment().tz(zonaHoraria);
    const fecha = fechaLocal.format("YYYY-MM-DD");
    const hora = fechaLocal.format("HH:mm:ss");
    const query =
      "INSERT INTO revenues (idUsuario, idProducto, idCliente ,fecha, hora , monto, metodoPago) VALUES ($1, $2, $3, $4, $5 ,$6, $7) RETURNING *";
    const values = [
      idUsuario,
      idProducto,
      idCliente,
      fecha,
      hora,
      monto,
      metodoPago,
    ];
    const result = await pool.query(query, values);
    if (result) {
      const queryAccount =
        "INSERT INTO account (fecha, idUsuario, monto, metodoPago ) VALUES ($1, $2, $3, $4)";
      const valuesAccount = [fecha, idUsuario, monto, metodoPago];
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
  getAllRevenues,
  createRevenues,
};
