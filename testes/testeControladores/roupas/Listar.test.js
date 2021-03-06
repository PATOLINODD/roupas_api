const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");
const { roupas } = require("../../../src/modelos/index");

test("deve retornar uma lista json com todos os registros", async () => {
  const lista = await roupas.findAll();
  return supertest(App)
    .get("/roupas")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ lista: JSON.stringify(lista) });
    });
});
