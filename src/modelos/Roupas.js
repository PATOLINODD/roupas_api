const { DataTypes } = require("sequelize");
const db = require("../infra/database");

const Roupas = db.define("Roupas", {
  peca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tamanho: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  numeracao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  faixa_etaria: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  estacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Roupas;
