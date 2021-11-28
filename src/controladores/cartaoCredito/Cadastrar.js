const { cartaoCredito } = require("../../modelos/index");

//classe Cadastrar faz a mesma coisa que a classe Atualizar
class Cadastrar {
  async cadastrarCartao(req, res) {
    try {
      const usuarioID = req.params.id;
      const credito = req.body;
      const cartao = await cartaoCredito.update(
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
            UsuarioId: usuarioID,
          },
        }
      );
      if (cartao[0]) {
        res.status(201).json({
          criado: true,
        });
      } else {
        res.status(400).send({
          criado: false,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Cadastrar();
