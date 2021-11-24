const { compras } = require("../../modelos/index");

//classe ListarID responsavel pela visualização de cada compra feita pelo usuario
class ListarID {
  async listarID(req, res) {
    try {
      const usuario_id = req.params.usuario_id;
      const lista = await compras.findAll({
        where: { usuario_id: usuario_id },
      });
      /** o mesmo que ...
       * SELECT * FROM Compras
       * WHERE usuario_id = ?
       */
      if (lista) {
        res.send({ correspondencia: JSON.stringify(lista) });
      } else {
        res.status(400).send({ correspondencia: 0 });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new ListarID();
