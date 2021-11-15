const Credito = require("../modelos/cartaoCredito");

class CartaoCredito {
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await Credito.findByPk(id);
      if (lista) {
        res.send({
          id: id,
          tabela: lista,
        });
      } else {
        res.status(404).send({
          id: id,
          tabela: lista,
        });
      }
    } catch (error) {
      res.status(400).send({
        msgErro: error,
      });
    }
  }
  async cadatrarUsuarioID(id) {
    try {
      await Credito.create({
        usuario_id: id,
      });
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }

  async cadastrarCartao(req, res) {
    try {
      const usuarioID = req.params.id;
      const credito = req.body;
      const cartao = await Credito.update(
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
            usuario_id: usuarioID,
          },
        }
      );
      if (cartao) {
        res.status(201).send({
          criado: true,
          tabela: cartao,
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
  async atualizar(req, res) {
    try {
      const id = req.params.id;
      const credito = req.body;

      const atualizado = await Credito.update(
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

module.exports = new CartaoCredito();
