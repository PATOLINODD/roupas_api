const { roupas } = require("../../modelos/index");

class ListarTodos {
  async listarTodos(req, res) {
    try {
      const lista = await roupas.findAll();
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
