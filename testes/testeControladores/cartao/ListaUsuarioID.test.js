const express = require("express");
const supertest = require("supertest");
const App = require("../../../src/infra/customExpress");
const { cartaoCredito } = require("../../../src/modelos/index");

App.use(express.json());

test(`deve retornar status 200 e um json`, async () => {
  try {
    const cartao = await cartaoCredito.findOne({ where: { usuario_id: 2 } });
    return supertest(App)
      .get("/cartaocredito/2") //passado como id é usuario_id
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual({
          /**o teste retonava erro quando passado somente o objeto
           * fazer o stringify foi uma alternativa de solução mais facil
           * visando somente a exatidão do dado.
           */
          tabela: JSON.stringify(cartao),
        });
      });
  } catch (error) {}
});
