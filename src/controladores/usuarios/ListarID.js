const { usuarios } = require("../../modelos/index");

//encontrar usuario pelo id
class ListarID {
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await usuarios.findByPk(id);
      /**o mesmo que ...
       * SELECT * FROM Usuarios
       * WHERE id = ?
       */
      if (lista) {
        res.send({
          tabela: JSON.stringify(lista),
        });
      } else {
        res.status(404).send({
          correspondencia: id,
          tabela: lista,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new ListarID();
