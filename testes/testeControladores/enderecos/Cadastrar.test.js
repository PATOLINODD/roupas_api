const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar 201 e um json { criado: true }", () => {
  return supertest(App)
    .post("/enderecos/cadastrar/1")
    .send({
      cep: "08460460",
      endereco: "rua qualquer",
      numero: "0A",
      apartamento: "50",
      bloco: "c",
      bairro: "rua dos bobos",
    })
    .then((res) => {
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({ criado: true });
    });
});
