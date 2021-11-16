const { usuarios } = require("../../modelos/index");

class ListarID {
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await usuarios.findByPk(id);
      if (lista) {
        res.send({
          correspondencia: id,
          tabela: lista,
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
