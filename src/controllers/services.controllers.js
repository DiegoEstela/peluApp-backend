const pool = require("../db/index");

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

module.exports = { createServices };
