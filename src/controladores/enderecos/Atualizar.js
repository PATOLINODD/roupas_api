const { enderecos } = require("../../modelos/index");

//classe Atualizar responsavel pela atualização do endereço de usuario
class Atualizar {
  async atualizar(req, res) {
    try {
      const usuarioID = req.params.usuario_id;
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
      /**o mesmo que ...
       * UPDATE Enderecos
       * SET cep = ?, endereco = ?, numero = ?, apartamento = ?,
       * bloco = ?, bairro = ?
       * WHERE usuario_id = ?
       */
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
