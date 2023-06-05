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
    const { IdUsuario, idCliente, IdProducto, monto, medioPago } = req.body;
    const zonaHoraria = moment.tz.guess();
    const fechaLocal = moment().tz(zonaHoraria);
    const fecha = fechaLocal.format("YYYY-MM-DD");
    const hora = fechaLocal.format("HH:mm:ss");
    const query =
      "INSERT INTO revenues (IdUsuario, IdProducto, idCliente ,fecha, hora , monto, medioPago) VALUES ($1, $2, $3, $4, $5 ,$6, $7, $8) RETURNING *";
    const values = [
      IdUsuario,
      IdProducto,
      idCliente,
      fecha,
      hora,
      monto,
      medioPago,
    ];
    const result = await pool.query(query, values);
    if (result) {
      res.status(200).json({ message: "creating a revenue" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRevenues,
  createRevenues,
};
