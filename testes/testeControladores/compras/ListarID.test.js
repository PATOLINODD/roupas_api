const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");
const { compras } = require("../../../src/modelos/index");

App.use(express.json());

test("deve retornar status 200 e json com uma lista", async () => {
  try {
    const lista = await compras.findAll({ where: { usuario_id: 2 } }); //esse id deve ser o mesmo que na rota
    return supertest(App)
      .get("/compras/2")
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual({
          correspondencia: JSON.stringify(lista),
        });
      });
  } catch (error) {
    throw error;
  }
});
