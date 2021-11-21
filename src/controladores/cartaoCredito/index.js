//importando e exportando todas as classes de cartao
const Cadastrar = require("./Cadastrar"),
  CadastrarUsuarioIDNoCartao = require("./CadastrarUsuarioID"),
  ListarID = require("./ListarID"),
  Atualizar = require("./Atualizar"),
  Deletar = require("./Deletar"),
  DestruirCartao = require("./Destruir");

module.exports = {
  Cadastrar,
  CadastrarUsuarioIDNoCartao,
  ListarID,
  Atualizar,
  Deletar,
  DestruirCartao,
};
