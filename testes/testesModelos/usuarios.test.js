const { usuarios } = require("../../src/modelos/index");
const db = require("../../src/infra/database");

test("o modelo Usuarios deve retornar true", () => {
  expect(usuarios).toBe(db.models.Usuarios);
});
