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
    const { cliente_id, valor, producto } = req.body;
    const zonaHoraria = moment.tz.guess();
    const fechaLocal = moment().tz(zonaHoraria);
    const fecha = fechaLocal.format("YYYY-MM-DD");
    const hora = fechaLocal.format("HH:mm:ss");
    const query =
      "INSERT INTO revenues (fecha, hora, cliente_id, valor, producto_id) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [fecha, hora, cliente_id, valor, producto];
    const result = await pool.query(query, values);
    if (result) {
      res.send("creating a new revenue");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllRevenues,
  createRevenues,
};
