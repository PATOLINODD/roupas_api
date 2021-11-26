const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar 200 e um json { criado: true }", () => {
  return supertest(App)
    .post("/roupas/cadastrar")
    .send({
      //mandar um registro existente pra retornar badRequest
      peca: "camisa",
      modelo: "casual",
      estampa: "star wars",
      marca: "alguma",
      cor: "amarela",
      tamanho: "m",
      numeracao: "",
      genero: "unissex",
      faixa_etaria: "adulto",
      estacao: "outono primavera",
      preco: 50.0,
      estoque: 15,
    })
    .then((res) => {
      expect(res.status).toBe(201); //se existir um mesmo registro vai dar status 400
      expect(res.body).toEqual({
        criado: true,
      });
    });
});
