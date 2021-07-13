require("dotenv").config();

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  define: {
    timestamp: true,
    underscored: true,
  },
};