const { cartaoCredito } = require("../../modelos/index");

class ListarID {
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await cartaoCredito.findOne({
        where: {
          usuario_id: id,
        },
      });
      if (lista) {
        res.send({
          id: id,
          tabela: lista,
        });
      } else {
        res.status(404).send({
          id: id,
          tabela: lista,
        });
      }
    } catch (error) {
      res.status(400).send({
        msgErro: error,
      });
    }
  }
}

module.exports = new ListarID();
