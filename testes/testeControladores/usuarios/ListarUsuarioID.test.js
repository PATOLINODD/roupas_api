const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");
const Usuarios = require("../../../src/modelos/Usuarios");

test("deve retornar status 200 e um json com a correspondencia", async () => {
  const lista = await Usuarios.findByPk(1);
  return supertest(App)
    .get("/usuarios/1")
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({ tabela: JSON.stringify(lista) });
    });
});
