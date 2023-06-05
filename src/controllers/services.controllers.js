const pool = require("../db/index");

const getAllServices = async (req, res) => {
  try {
    const query =
      "SELECT * FROM services WHERE deleted = $1 ORDER BY concepto ASC";
    const values = [false];
    const result = await pool.query(query, values);
    const services = result.rows;
    res.status(200).json(services);
  } catch (error) {
    console.log(error);
  }
};

const createServices = async (req, res, next) => {
  try {
    const { idUsuario, concepto } = req.body;
    const query =
      "INSERT INTO services (idUsuario, concepto, deleted) VALUES ($1, $2, $3)";
    const values = [idUsuario, concepto, false];
    const result = await pool.query(query, values);

    if (result) {
      res.status(200).json({ message: "creating a services" });
    }
  } catch (error) {
    console.log(error);
  }
};

const unsubscribeServices = async (req, res, next) => {
  try {
    const { id } = req.params;
    const query = "UPDATE services SET deleted = $1 WHERE idServicio = $2";
    const values = [true, id];

    const result = await pool.query(query, values);
    if (result) {
      res.status(200).json({ message: "unsubscribe a services" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllServices, createServices, unsubscribeServices };
