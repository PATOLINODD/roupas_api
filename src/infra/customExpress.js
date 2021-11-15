const express = require("express");
const rotasRoupas = require("../rotas/roupas");
const rotasUsuarios = require("../rotas/usuarios");
const rotasCartao = require("../rotas/cartaoCredito");
const App = express();
App.use(express.json());

rotasRoupas(App);
rotasUsuarios(App);
rotasCartao(App);

module.exports = App;
