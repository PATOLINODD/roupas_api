const rotasRoupas = require("../rotas/roupas");
const rotasUsuarios = require("../rotas/usuarios");
const rotasCartao = require("../rotas/cartaoCredito");
const rotasEnderecos = require("../rotas/enderecos");

module.exports = (App) => {
  rotasUsuarios(App);
  rotasRoupas(App);
  rotasCartao(App);
  rotasEnderecos(App);
};
