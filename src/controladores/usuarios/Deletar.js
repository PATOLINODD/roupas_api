const { usuarios } = require("../../modelos/index");

//metodos para a deleção dos registros de cartão e endereços
const { DestruirCartao } = require("../cartaoCredito/index");
const { DestruirEnderecos } = require("../enderecos/index");

class Deletar {
  async deletar(req, res) {
    try {
      const { nome, email } = req.body;
      const id = req.params.id;
      console.log(nome);
      console.log(email);

      const deletado = await usuarios.destroy({
        where: {
          id: id,
        },
      });
      console.log(deletado);
      if (deletado) {
        res.send({
          deletado: true,
        });
        /**quando o usuario deletar seu registro
         * os metodos serão chamados e tudo que estava relacionado será deletado também
         */
        DestruirCartao.destruir(id);
        DestruirEnderecos.destruir(id);
      } else {
        res.status(400).send({
          deletado: false,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}
module.exports = new Deletar();
