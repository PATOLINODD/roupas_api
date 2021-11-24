const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar 200 e um json { deletado: true }", () => {
  return supertest(App)
    .del("/enderecos/deletar/1")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ deletado: true });
    });
});
