const { DataTypes } = require("sequelize");
const db = require("../infra/database");
const Usuarios = require("../modelos/Usuarios");

const Endercos = db.define("Enderecos", {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: Usuarios,
      key: "id",
    },
  },
  cep: {
    type: DataTypes.STRING,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  numero: {
    type: DataTypes.STRING,
  },
  apartamento: {
    type: DataTypes.STRING,
  },
  bloco: {
    type: DataTypes.STRING(3),
  },
});
