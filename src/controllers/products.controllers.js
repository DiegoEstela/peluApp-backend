const pool = require("../db/index");

const getAllProducts = async (req, res) => {
  try {
    const query =
      "SELECT * FROM products WHERE deleted = $1 ORDER BY concepto ASC";
    const values = [false];
    const result = await pool.query(query, values);
    const prodcuts = result.rows;
    res.status(200).json(prodcuts);
  } catch (error) {
    console.log(error);
  }
};

const createProducts = async (req, res, next) => {
  try {
    const { idUsuario, concepto, monto } = req.body;
    const query =
      "INSERT INTO products (idUsuario, concepto, monto, deleted) VALUES ($1, $2, $3 , $4)";
    const values = [idUsuario, concepto, monto, false];
    const result = await pool.query(query, values);

    if (result) {
      res.status(200).json({ message: "creating a products" });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateProducts = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { concepto, monto } = req.body;
    const query =
      "UPDATE products SET concepto = $1, monto = $2 WHERE idProducto = $3 RETURNING *";
    const values = [concepto, monto, id];
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

const CancelProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const query = "UPDATE products SET deleted = $1 WHERE idProducto = $2";
    const values = [true, id];

    const result = await pool.query(query, values);
    if (result) {
      res.status(200).json({ message: "cancel product" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllProducts,
  createProducts,
  updateProducts,
  CancelProduct,
};
