const { enderecos } = require("../../src/modelos/index");
const db = require("../../src/infra/database");

test("o modelo Endercos deve retornar true", () => {
  expect(enderecos).toBe(db.models.Enderecos);
});
