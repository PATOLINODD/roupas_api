const { enderecos } = require("../../modelos/index");

class Deletar {
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

module.exports = new Deletar();
