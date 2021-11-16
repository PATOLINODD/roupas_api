const express = require("express");
const rotas = require("./conectarRotas");
const App = express();
App.use(express.json());

rotas(App);

module.exports = App;
