const { Pool } = require("pg");
const { db } = require("./config");

const pool = new Pool({
  connectionString: db.url + "?sslmode=require",
});

module.exports = pool;
