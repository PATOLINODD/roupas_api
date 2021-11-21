const { DataTypes } = require("sequelize");
const db = require("../infra/database");
const Usuarios = require("../modelos/Usuarios");

//criação da tabela Cartao_credito no banco de dados
//tabela de um pra um
const CartaoCredito = db.define("Cartao_credito", {
  usuario_id: {
    //chave estrangeira
    type: DataTypes.INTEGER,
    allowNull: false, //padrão é false
    unique: true,
    references: {
      model: Usuarios,
      key: "id",
    },
  },
  numeracao: {
    type: DataTypes.STRING(16), //armazena um varchar(16)
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
