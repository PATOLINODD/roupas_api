const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");

test("deve retornar status 200 e json { atualizado: true }", () => {
  return supertest(App)
    .put("/usuarios/atualizar/1")
    .send({
      nome: "outro nome",
      email: "outroemail@email.com",
      senha: "uma senha forte",
    })
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        atualizado: true,
      });
    });
});
