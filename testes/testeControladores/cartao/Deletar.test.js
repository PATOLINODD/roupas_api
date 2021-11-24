const express = require("express");
const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar status 200 e um json { deletado: true }", () => {
  return supertest(App)
    .del("/cartaocredito/deletar/1")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ deletado: true });
    });
});
