const { DataTypes } = require("sequelize");
const db = require("../infra/database");
const CartaoCredito = require("./cartaoCredito");
const Enderecos = require("./Enderecos");

//criação da tabela Usuarios no banco de dados
//id chave primaria é criada por padrão
const Usuarios = db.define("Usuarios", {
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

Usuarios.hasOne(CartaoCredito);
CartaoCredito.belongsTo(Usuarios);
Usuarios.hasMany(Enderecos);
Enderecos.belongsTo(Usuarios);

module.exports = Usuarios;
