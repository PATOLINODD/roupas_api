const { usuarios } = require("../../modelos/index");

//metodos para a deleção dos registros de cartão e endereços
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
        /**quando o usuario deletar seu registro
         * os metodos serão chamados e tudo que estava relacionado será deletado também
         */
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
