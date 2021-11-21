const { roupas } = require("../../src/modelos/index");
const db = require("../../src/infra/database");

test("o modelo roupas deve retornar true", () => {
  expect(roupas).toBe(db.models.Roupas);
});
