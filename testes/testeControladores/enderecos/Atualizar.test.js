const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar 200 e um json { atualizado: true }", () => {
  return supertest(App)
    .put("/enderecos/atualizar/1")
    .send({
      cep: "08150150",
      endereco: "rua legal da programação",
      numero: "10A",
      apartamento: null,
      bloco: null,
      bairro: "jardim dos programadores",
    })
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ atualizado: true });
    });
});
