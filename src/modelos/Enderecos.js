const { DataTypes } = require("sequelize");
const db = require("../infra/database");
const Usuarios = require("../modelos/Usuarios");

//criação da tabela Enderecos no banco de dados
const Enderecos = db.define("Enderecos", {
  usuario_id: {
    //chave estrangeira
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
  bairro: {
    type: DataTypes.STRING,
  },
});

module.exports = Enderecos;
