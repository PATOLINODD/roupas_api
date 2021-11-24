const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar 400 e um json { criado: false, msgErro: 'tabela já existe' }", () => {
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
      expect(res.status).toBe(400);
      expect(res.body).toEqual({
        criado: false,
        msgErro: "tabela já existe",
      });
    });
});
