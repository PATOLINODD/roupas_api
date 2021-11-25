const supertest = require("supertest");
const express = require("express");
const App = require("../../../src/infra/customExpress");

App.use(express.json());

test("deve retornar status 200 e um json { deletado: true }", () => {
  /**realmente deleta o registro existente, como deveria, assim toda vez que rodar o teste
   * por o id existente na rota "/compras/deletar/:id", se... for testar a destruição
   * de registro existente. Nesse caso eu vou testar o erro pois pra não confundir.
   */
  return supertest(App)
    .del("/compras/deletar/6") //já foi deletado, então deve retornar status 400
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        deletado: true,
      });
    });
});
