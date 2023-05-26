const { config } = require("dotenv");
config();

module.exports = {
  db: {
    url: process.env.POSTGRES_URL,
  },
};
