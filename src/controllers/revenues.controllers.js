const pool = require("../db/index");
const moment = require("moment");

const getAllRevenues = async (req, res) => {
  try {
    const allrevenues = await pool.query("SELECT * FROM revenue");
    res.json(allrevenues.rows);
  } catch (error) {
    console.log(error);
  }
};

const createRevenues = async (req, res, next) => {
  try {
    const { cliente_id, valor, producto } = req.body;
    const fecha = moment().format("YYYY-MM-DD");
    const hora = moment().format("HH:mm:ss");
    const query =
      "INSERT INTO revenue (fecha, hora, cliente_id, valor, producto) VALUES ($1, $2, $3, $4, $5) RETURNING *";
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
