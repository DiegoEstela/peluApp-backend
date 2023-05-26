const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
require("dotenv").config();
const usersRoutes = require("./src/routes/user.routes");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(usersRoutes);

app.get("/", async (req, res) => {
  res.send("Bienvenidx a mi Api");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
