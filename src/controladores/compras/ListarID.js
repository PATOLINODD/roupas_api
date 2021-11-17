const { compras } = require("../../modelos/index");

class ListarID {
  async listarID(req, res) {
    try {
      const usuario_id = req.params.id;
      const lista = await compras.findAll({
        where: { usuario_id: usuario_id },
      });
      if (lista) {
        res.send({ correspondencia: lista });
      } else {
        res.status(400).send({ correspondencia: lista });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new ListarID();
