const { compras } = require("../../modelos/index");
const { deletar } = require("../enderecos/Deletar");

class Deletar {
  async deletar(req, res) {
    try {
      const id = req.params.id;
      const deletado = await compras.destroy({ where: { id: id } });
      console.log(deletado);
      if (deletado) {
        res.send({
          deletado: true,
          id: id,
        });
      } else {
        res.status(404).send({
          deletado: false,
          id: id,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Deletar();
