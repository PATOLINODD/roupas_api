const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");
App.use(express.json());

test("Deve retornar status 200 e um objeto de resposta", () => {
  return supertest(App)
    .put("/cartaocredito/atualizar/2")
    .send({
      numeracao: "4041123475533678",
      bandeira: "master card",
      nome: "PATRICK S OLIVEIRA",
      cod_seguranca: "375",
      data_vencimento: "05/26",
      cpf: "48012375857",
    })
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ atualizado: true });
    });
});
