const usuarios = require("../modelos/Usuarios");
const Credito = require("./CartaoCredito");

class Usuarios {
  async listarTodos(req, res) {
    try {
      const lista = await usuarios.findAll();
      if (lista.length) {
        res.send(lista);
      } else {
        res.status(404).send("nenhuma tabela foi encontrada");
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await usuarios.findByPk(id);
      if (lista) {
        res.send({
          correspondencia: id,
          tabela: lista,
        });
      } else {
        res.status(404).send({
          correspondencia: id,
          tabela: lista,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
  async cadastrar(req, res) {
    try {
      const usuario = req.body;
      const [tabela, created] = await usuarios.findOrCreate({
        where: {
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
        },
      });
      if (created) {
        res.status(201).send({
          criado: created,
          tabela: tabela,
        });
        Credito.cadatrarUsuarioID(tabela.id);
      } else {
        res.send({
          criado: false,
          tabela: tabela,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
  async atualizar(req, res) {
    try {
      const id = req.params.id;
      const usuario = req.body;

      const atualizado = await usuarios.update(
        {
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha,
        },
        {
          where: {
            id: id,
          },
        }
      );
      if (atualizado[0] > 0) {
        res.send({
          atualizado: true,
          correspondencia: id,
          quantidade: atualizado,
        });
      } else {
        res.send({
          atualizado: false,
          correspondencia: id,
          quantidade: atualizado,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
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

module.exports = new Usuarios();
