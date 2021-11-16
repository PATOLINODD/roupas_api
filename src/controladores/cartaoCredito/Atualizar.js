const { cartaoCredito } = require("../../modelos/index");

class Atualizar {
  async atualizar(req, res) {
    try {
      const id = req.params.id;
      const credito = req.body;

      const atualizado = await cartaoCredito.update(
        {
          numeracao: credito.numeracao,
          bandeira: credito.bandeira,
          nome: credito.nome,
          cod_seguranca: credito.cod_seguranca,
          data_vencimento: credito.data_vencimento,
          cpf: credito.cpf,
        },
        {
          where: {
            usuario_id: id,
          },
        }
      );
      console.log(atualizado);
      if (atualizado[0] === 1) {
        res.send({
          atualizado: true,
        });
      } else {
        res.status(400).send({ atualizado: false });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Atualizar();
