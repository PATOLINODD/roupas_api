const { enderecos } = require("../../modelos/index");

class ListarUsuarioID {
  async listarUsuarioID(req, res) {
    try {
      const id = req.params.usuario_id;
      const lista = await enderecos.findOne({
        where: {
          UsuarioId: id,
        },
      });
      /**o mesmo que ...
       * SELECT * FROM Enderecos
       * WHERE usuario_id = ?
       * LIMIT 1
       */
      if (lista) {
        res.send({ lista: JSON.stringify(lista) });
      } else {
        res.status(400).send({ lista: lista });
      }
    } catch (error) {
      res.status(400).send({
        msgErro: error,
      });
    }
  }
}

module.exports = new ListarUsuarioID();
