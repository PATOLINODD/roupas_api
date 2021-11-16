const { DataTypes } = require("sequelize");
const db = require("../infra/database");
const Usuarios = require("./Usuarios");
const Roupas = require("./Roupas");

const Compras = db.define("Compras", {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuarios,
      key: "id",
    },
  },
  roupas_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Roupas,
      key: "id",
    },
  },
});

module.exports = Compras;
