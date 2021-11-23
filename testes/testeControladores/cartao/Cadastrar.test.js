const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");
App.use(express.json());

test("Deve retornar status 201 e um json { criado: true }", () => {
  return supertest(App)
    .post("/cartaocredito/cadastrar/1")
    .send({
      numeracao: "404012341234",
      bandeira: "visa",
      nome: "nome aleatorio",
      cod_seguranca: "123",
      data_vencimento: "01/23",
      cpf: "12312312312",
    })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body).toEqual({ criado: true });
    });
});
