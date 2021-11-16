const { enderecos } = require("../../modelos/index");

class ListarUsuarioID {
  async listarUsuarioID(req, res) {
    try {
      const id = req.params.id;
      const lista = await enderecos.findOne({
        where: {
          usuario_id: id,
        },
      });
      if (lista) {
        res.send({ lista: lista });
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
