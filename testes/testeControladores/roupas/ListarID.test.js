const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");
const { roupas } = require("../../../src/modelos/index");

test("deve retornar 200 um json stringificado", async () => {
  const lista = await roupas.findByPk(1); //deve ser o mesmo id na rota pra sucesso
  return supertest(App)
    .get("/roupas/1") //se não existir retornará status 404
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        correspondência: JSON.stringify(lista),
      });
    });
});
