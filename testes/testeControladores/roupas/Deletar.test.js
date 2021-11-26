const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");

test("deve retornar status 200 e um json { deletado: true }", () => {
  return supertest(App)
    .del("/roupas/deletar/3") //se não existir retornará status 400
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ deletado: true });
    });
});
