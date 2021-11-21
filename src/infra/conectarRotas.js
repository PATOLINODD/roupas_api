const rotasRoupas = require("../rotas/roupas");
const rotasUsuarios = require("../rotas/usuarios");
const rotasCartao = require("../rotas/cartaoCredito");
const rotasEnderecos = require("../rotas/enderecos");
const rotasCompras = require("../rotas/compras");

//criação da função que recebe App e adiciona App em todas as rotas
module.exports = (App) => {
  rotasUsuarios(App);
  rotasRoupas(App);
  rotasCartao(App);
  rotasEnderecos(App);
  rotasCompras(App);
};
