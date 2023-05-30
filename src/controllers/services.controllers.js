const pool = require("../db/index");

const getAllServices = async (req, res) => {
  try {
    const allServices = await pool.query(
      "SELECT * FROM services ORDER BY concepto ASC"
    );
    res.json(allServices.rows);
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

module.exports = { getAllServices, createServices };
