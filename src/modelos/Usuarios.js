const { DataTypes } = require("sequelize");
const db = require("../infra/database");

//criação da tabela Usuarios no banco de dados
const Usuarios = db.define("Usuarios", {
  //id chave primaria é criada por padrão
  nome: {
    type: DataTypes.STRING, //armezana um varchar(255)
    allowNull: false,
  },
  email: {
    //jamais repetir o email existente, pois pertence a um unico usuario
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
