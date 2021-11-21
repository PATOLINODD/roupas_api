const { roupas } = require("../../modelos/index");

//lista todos os registros
class ListarTodos {
  async listarTodos(req, res) {
    try {
      const lista = await roupas.findAll();
      /**o mesmo que ...
       * SELECT * FROM Roupas
       */
      if (lista.length > 0) {
        res.send(lista);
      } else {
        res.status(404).send({ correspondencias: lista.length });
      }
    } catch (e) {
      res.status(400).send({ msgErro: e });
    }
  }
}

module.exports = new ListarTodos();
