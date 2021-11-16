const { enderecos } = require("../../modelos/index");

class Atualizar {
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
}

module.exports = new Atualizar();
