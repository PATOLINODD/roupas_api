const { cartaoCredito } = require("../../modelos/index");

//classe ListarID responsavel por listar Cartao_credito existente
//relacionado ao id de usuario
class ListarID {
  async listarID(req, res) {
    try {
      const id = req.params.usuario_id;
      const lista = await cartaoCredito.findOne({
        where: {
          usuario_id: id,
        },
      });
      /** o mesmo que ...
       * SELECT * FROM Cartao_credito
       * WHERE usuario_id = ?
       * LIMIT 1
       */
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
