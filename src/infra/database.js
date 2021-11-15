const Sequelize = require("sequelize");
const db = new Sequelize({
  dialect: "sqlite",
  storage: "dbRoupas.sqlite",
});

module.exports = db;
