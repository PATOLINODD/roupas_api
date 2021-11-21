const Sequelize = require("sequelize");

//criando o banco de dados sqlite3
const db = new Sequelize({
  dialect: "sqlite",
  storage: "dbRoupas.sqlite",
});

module.exports = db;
