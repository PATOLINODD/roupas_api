const { cartaoCredito } = require("../../src/modelos/index");
const sequelize = require("../../src/infra/database");

test("cartao deve ser um modelo, deve retornar true", () => {
  expect(cartaoCredito).toBe(sequelize.models.cartao_credito);
});
