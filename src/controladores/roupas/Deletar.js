const { roupas } = require("../../modelos/index");

class Deletar {
  async deletar(req, res) {
    try {
      const id = req.params.id;
      const deletado = await roupas.destroy({
        where: {
          id: id,
        },
      });
      if (deletado[0] >= 1) {
        res.send({
          status: "deletado",
          quantidade: deletado,
          id: id,
        });
      } else {
        res.send({ correspondência: deletado, id: id });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Deletar();
