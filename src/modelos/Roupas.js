const { DataTypes } = require("sequelize");
const db = require("../infra/database");

//criação da tabela Roupas no banco de dados
const Roupas = db.define("Roupas", {
  peca: {
    type: DataTypes.STRING, //armazena um varchar(255)
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estampa: {
    type: DataTypes.STRING,
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
    type: DataTypes.STRING(2), //armazena um varchar(2)
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
    type: DataTypes.DOUBLE, //armezena numeros decimais
    allowNull: false,
  },
  estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Roupas;
