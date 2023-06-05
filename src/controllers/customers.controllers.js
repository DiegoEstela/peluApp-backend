const pool = require("../db/index");
const moment = require("moment-timezone");

const getAllCustomer = async (req, res) => {
  try {
    const query =
      "SELECT * FROM customers WHERE deleted = $1 ORDER BY nombre ASC";
    const values = [false];
    const result = await pool.query(query, values);
    const customers = result.rows;
    res.status(200).json(customers);
  } catch (error) {
    console.log(error);
  }
};

const createCustomers = async (req, res, next) => {
  try {
    const { idUsuario, nombre, apellido, fecha_nacimiento, telefono } =
      req.body;
    const zonaHoraria = moment.tz.guess();
    const fechaLocal = moment().tz(zonaHoraria);
    const fechaCreacion = fechaLocal.format("YYYY-MM-DD");
    const fechaBaja = "";
    const query =
      "INSERT INTO customers ( idUsuario, nombre, apellido, fecha_nacimiento, telefono, fecha_creacion, fecha_baja, deleted) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const values = [
      idUsuario,
      nombre,
      apellido,
      fecha_nacimiento,
      telefono,
      fechaCreacion,
      fechaBaja,
      false,
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
  getAllCustomer,
  createCustomers,
  updateCustomers,
};
