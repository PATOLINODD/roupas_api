const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");

test("deve retornar status 201 e json { criado: true }", () => {
  return supertest(App)
    .post("/usuarios/cadastrar")
    .send({
      nome: "seu nome",
      email: "email@email.com.br", //email é unique, então se mandar o mesmo email retornará status 400
      senha: "uma senha forte",
    })
    .then((res) => {
      expect(res.status).toBe(201);
      expect(res.body).toEqual({ criado: true });
    });
});
