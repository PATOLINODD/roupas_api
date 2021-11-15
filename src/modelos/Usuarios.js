const { DataTypes } = require("sequelize");
const db = require("../infra/database");

const Usuarios = db.define("Usuarios", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Usuarios;
