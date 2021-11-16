const { usuarios } = require("../../modelos/index");
const { DestruirCartao } = require("../cartaoCredito/index");
const { DestruirEnderecos } = require("../enderecos/index");

class Deletar {
  async deletar(req, res) {
    try {
      const id = req.params.id;

      const deletado = await usuarios.destroy({
        where: {
          id: id,
        },
      });
      if (deletado[0] > 0) {
        res.send({
          deletado: true,
          correspondencia: id,
        });
        DestruirCartao.destruir(id);
        DestruirEnderecos.destruir(id);
      } else {
        res.send({
          deletado: false,
          correspondencia: id,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}
module.exports = new Deletar();
