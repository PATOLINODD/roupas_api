const { cartaoCredito } = require("../../src/modelos/index");
const db = require("../../src/infra/database");

test("o modelo cartao_credito deve retornar true", () => {
  expect(cartaoCredito).toBe(db.models.Cartao_credito);
});
