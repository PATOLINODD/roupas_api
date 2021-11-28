const { cartaoCredito } = require("../../modelos/index");

//classe Deletar está responsavel por deletar o dados do cartão apenas
//faz a mesma tarefa que a classe Atualizar, mas tranforma todos os dados em null
class Deletar {
  async deletar(req, res) {
    try {
      const id = req.params.id;
      const deletado = await cartaoCredito.update(
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
            UsuarioId: id,
          },
        }
      );
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
