const pool = require("../db/index");

const getAllAccounts = async (req, res) => {
  try {
    const query = "SELECT * FROM account";
    const result = await pool.query(query);
    const accounts = result.rows;
    res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
  }
};

const getAllAccountsByDate = async (req, res) => {
  try {
    const { desde, hasta } = req.body;
    const query = `
    SELECT monto, metodopago
    FROM account
    WHERE fecha BETWEEN $1 AND $2;
  `;
    const result = await pool.query(query, [desde, hasta]);
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    res.status(500).json({ error: "Ocurrió un error al obtener los datos" });
  }
};

module.exports = {
  getAllAccounts,
  getAllAccountsByDate,
};
