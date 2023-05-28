const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const customerRoutes = require("./src/routes/customers.routes");
const servicesRoutes = require("./src/routes/services.routes");
const productsRoutes = require("./src/routes/produtcs.routes");
const revenuesRoutes = require("./src/routes/revenues.routes");
const expensesRoutes = require("./src/routes/expenses.routes");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customerRoutes);
app.use(servicesRoutes);
app.use(productsRoutes);
app.use(revenuesRoutes);
app.use(expensesRoutes);

app.get("/", async (req, res) => {
  res.send("Bienvenidx a mi Api");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
