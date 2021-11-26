const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");

test("deve retornar 200 e json { deletado: true }", () => {
  return supertest(App)
    .del("/usuarios/deletar/1") //se já deletado retornará status 400
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ deletado: true });
    });
});
