const pool = require("../db/index");

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await pool.query("SELECT * FROM products");
    res.json(allProducts.rows);
  } catch (error) {
    console.log(error);
  }
};

const createProducts = async (req, res, next) => {
  try {
    const { concepto, precio } = req.body;
    const query =
      "INSERT INTO products (concepto, precio) VALUES ($1, $2) RETURNING *";
    const values = [concepto, precio];
    const result = await pool.query(query, values);
    if (result) {
      res.send("creating a Product");
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { concepto, precio } = req.body;
    const query =
      "UPDATE products SET concepto = $1, precio = $2 WHERE id = $3 RETURNING *";
    const values = [concepto, precio, id];
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

module.exports = { getAllProducts, createProducts, updateProducts };
