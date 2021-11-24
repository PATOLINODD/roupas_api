const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");
const { enderecos } = require("../../../src/modelos/index");

App.use(express.json());

test("deve retornar 200 e um json stringificado", async () => {
  try {
    const lista = await enderecos.findOne({ where: { usuario_id: 1 } });
    //mesmo usuario_id usado na rota, se usa para a busca   |^|^|^|^|^|
    return supertest(App)
      .get("/enderecos/1")
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ lista: JSON.stringify(lista) });
      });
  } catch (error) {
    throw error;
  }
});
