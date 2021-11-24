const { enderecos } = require("../../modelos/index");

//Classe Deletar faz o mesmo que Atualizar, porém os valores mudam pra null
//pois o usuario ainda existem
class Deletar {
  async deletar(req, res) {
    try {
      const usuarioID = req.params.usuario_id;
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
