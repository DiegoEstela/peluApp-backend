const pool = require("../db/index");
const moment = require("moment");

const getAlCustomer = async (req, res) => {
  try {
    const allCustomer = await pool.query("SELECT * FROM customers");
    res.json(allCustomer.rows);
  } catch (error) {
    console.log(error);
  }
};

const createCustomers = async (req, res, next) => {
  try {
    const { nombre, apellido, fecha_nacimiento, telefono } = req.body;
    const fechaCreacion = moment().format("YYYY-MM-DD");
    const fechaBaja = "";
    const query =
      "INSERT INTO customers (nombre, apellido, fecha_nacimiento, telefono, fecha_creacion, fecha_baja) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
    const values = [
      nombre,
      apellido,
      fecha_nacimiento,
      telefono,
      fechaCreacion,
      fechaBaja,
    ];

    const result = await pool.query(query, values);
    if (result) {
      res.send("creating a custumer");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateCustomers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, fecha_nacimiento, telefono } = req.body;
    const query =
      "UPDATE customers SET nombre = $1, apellido = $2, fecha_nacimiento = $3, telefono = $4 WHERE id = $5 RETURNING *";
    const values = [nombre, apellido, fecha_nacimiento, telefono, id];
    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
      res.status(404).send("El producto no existe.");
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAlCustomer,
  createCustomers,
  updateCustomers,
};
