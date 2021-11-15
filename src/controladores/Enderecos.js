const enderecos = require("../modelos/Enderecos");

class Enderecos {
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await enderecos.findByPk(id);
      if (lista) {
        res.send({ lista: lista });
      } else {
        res.status(400).send({ lista: lista });
      }
    } catch (error) {
      res.status(400).send({
        msgErro: error,
      });
    }
  }

  async cadastrarUsuarioID(id) {
    try {
      await enderecos.create({
        usuario_id: id,
      });
    } catch (error) {
      throw error;
    }
  }

  async cadastrar(req, res) {
    try {
      const usuarioID = req.params.id;
      const endereco = req.body;

      const cadastrado = await enderecos.update(
        {
          cep: endereco.cep,
          endereco: endereco.endereco,
          numero: endereco.numero,
          apartamento: endereco.apartamento,
          bloco: endereco.bloco,
          bairro: endereco.bairro,
        },
        {
          where: {
            usuario_id: usuarioID,
          },
        }
      );
      if (cadastrado[0] === 1) {
        res.status(201).send({
          criado: true,
          endereco: endereco,
        });
      } else {
        res.status(400).send({ criado: false });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }

  async atualizar(req, res) {
    try {
      const usuarioID = req.params.id;
      const endereco = req.body;

      const atualizado = await enderecos.update(
        {
          cep: endereco.cep,
          endereco: endereco.endereco,
          numero: endereco.numero,
          apartamento: endereco.apartamento,
          bloco: endereco.bloco,
          bairro: endereco.bairro,
        },
        {
          where: {
            usuario_id: usuarioID,
          },
        }
      );
      if (atualizado[0] === 1) {
        res.send({
          atualizado: true,
          dados: endereco,
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
      const usuarioID = req.params.id;
      const deletado = await enderecos.update(
        {
          cep: null,
          endereco: null,
          numero: null,
          apartamento: null,
          bloco: null,
          bairro: null,
        },
        {
          where: {
            usuario_id: usuarioID,
          },
        }
      );
      if (deletado[0] === 1) {
        res.send({ deletado: true });
      } else {
        res.status(400).send({ deletado: false });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Enderecos();
