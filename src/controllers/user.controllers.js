const pool = require("../db/index");

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
    const { nombre, apellido, telefono } = req.body;
    const result = await pool.query(
      "INSERT INTO customers (nombre, apellido, telefono) VALUES ($1, $2, $3)",
      [nombre, apellido, telefono]
    );
    if (result) {
      res.send("creating a costumer");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAlCustomer,
  createCostumers,
};
