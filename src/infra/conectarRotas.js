const rotasRoupas = require("../rotas/roupas");
const rotasUsuarios = require("../rotas/usuarios");
const rotasCartao = require("../rotas/cartaoCredito");
const rotasEnderecos = require("../rotas/enderecos");
const rotasCompras = require("../rotas/compras");

module.exports = (App) => {
  rotasUsuarios(App);
  rotasRoupas(App);
  rotasCartao(App);
  rotasEnderecos(App);
  rotasCompras(App);
};
