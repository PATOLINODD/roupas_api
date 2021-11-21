const { roupas } = require("../../modelos/index");

//classe ListarID lista por chave primaria, chave primaria é unica.
class ListarID {
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await roupas.findByPk(id);
      /**o mesmo que ...
       * SELECT * FROM Roupas
       * WHERE id = ?
       */
      if (lista) {
        res.send({
          correspondência: lista,
        });
      } else {
        res.status(404).send({
          correspondência: lista,
          id: id,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new ListarID();
