const { DataTypes } = require("sequelize");
const db = require("../infra/database");
const Usuarios = require("./Usuarios");
const Roupas = require("./Roupas");

//criação da tabela Compras no banco de dados
const Compras = db.define("Compras", {
  usuario_id: {
    //chave estrangeira
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuarios,
      key: "id",
    },
  },
  roupas_id: {
    //chave estrangeira
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Roupas,
      key: "id",
    },
  },
});

module.exports = Compras;
