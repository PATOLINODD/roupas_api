const { cartaoCredito } = require("../../modelos/index");

class Deletar {
  async deletar(req, res) {
    try {
      const id = req.params.id;
      const deletado = await Credito.update(
        {
          numeracao: null,
          bandeira: null,
          nome: null,
          cod_seguranca: null,
          data_vencimento: null,
          cpf: null,
        },
        {
          where: {
            usuario_id: id,
          },
        }
      );
      console.log(deletado);
      if (deletado[0] === 1) {
        res.send({
          deletado: true,
        });
      } else {
        res.status(400).send({ deletado: false });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Deletar();
