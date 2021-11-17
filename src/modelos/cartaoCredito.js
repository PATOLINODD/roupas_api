const { DataTypes } = require("sequelize");
const db = require("../infra/database");
const Usuarios = require("../modelos/Usuarios");

const CartaoCredito = db.define("Cartao_credito", {
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: Usuarios,
      key: "id",
    },
  },
  numeracao: {
    type: DataTypes.STRING(16),
    unique: true,
  },
  bandeira: {
    type: DataTypes.STRING,
  },
  nome: {
    type: DataTypes.STRING,
  },
  cod_seguranca: {
    type: DataTypes.STRING(3),
  },
  data_vencimento: {
    type: DataTypes.STRING,
  },
  cpf: {
    type: DataTypes.STRING(11),
    unique: true,
  },
});

module.exports = CartaoCredito;
