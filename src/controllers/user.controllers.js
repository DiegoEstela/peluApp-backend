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

const createCostumers = async (req, res, next) => {
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
      res.send("creating a costumer");
    }
  } catch (error) {
    console.log(error);
  }
};

const createServices = async (req, res, next) => {
  try {
    const { concepto } = req.body;
    const result = await pool.query(
      "INSERT INTO services (concepto) VALUES ($1)",
      [concepto]
    );
    if (result) {
      res.send("creating a services");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAlCustomer,
  createCostumers,
  createServices,
};
