//importando a tabela Cartao_credito
const { cartaoCredito } = require("../../modelos/index");

//classe Atualizar controla atualização de conteudo na tabela referente a cartão
class Atualizar {
  async atualizar(req, res) {
    try {
      const id = req.params.id; //armazenando o id da rota para variavel id
      const credito = req.body; //armazenando o json recebido a variavel credito

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
            UsuarioId: id,
          },
        }
      );
      /*o mesmo que 
      UPDATE Cartao_credito 
      SET numeracao = ???, bandeira = ???, nome = ???, 
      cod_seguranca = ???, data_vencimento = ???, cpf = ???
      WHERE = usuario_id = ?
      */
      if (atualizado[0] === 1) {
        res.status(200).json({
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
