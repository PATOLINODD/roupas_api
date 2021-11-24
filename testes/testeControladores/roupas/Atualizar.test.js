const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar 200 e um json { atualizado: true }", () => {
  return supertest(App)
    .put("/roupas/atualizar/1")
    .send({
      peca: "camiseta",
      modelo: "casual manga curta",
      estampa: "guardiões da galaxia",
      marca: "",
      cor: "preta",
      tamanho: "p",
      numeracao: "",
      genero: "unissex",
      faixa_etaria: "infantil",
      estacao: "outono primavera",
      preco: 80.99,
      estoque: 100,
    })
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ atualizado: true });
    });
});
