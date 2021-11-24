const express = require("express");
const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar 201 e um json { criado: true }", () => {
  return supertest(App)
    .post("/compras/cadastrar")
    .send({
      //se não existir id de nem um nem outro retornará erro status 400
      usuario_id: 1,
      roupas_id: 2,
    })
    .then((res) => {
      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual({ criado: true });
    });
});
