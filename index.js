const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;
require("dotenv").config();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send("Bienvenidx a mi Api");
});

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
