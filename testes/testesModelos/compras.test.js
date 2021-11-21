const { compras } = require("../../src/modelos/index");
const db = require("../../src/infra/database");

test("o modelo Compras deve retornar true", () => {
  expect(compras).toBe(db.models.Compras);
});
