const { usuarios } = require("../../modelos/index");

class Atualizar {
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
}

module.exports = new Atualizar();
