const express = require("express");
const rotas = require("./conectarRotas");
const App = express();
App.use(express.json()); //fazendo o parse dos dados para receber um json

rotas(App); //conectando App à rotas

module.exports = App;
