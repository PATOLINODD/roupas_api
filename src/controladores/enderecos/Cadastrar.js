const { enderecos } = require("../../modelos/index");

//classe Cadastrar, a tabela começa com valores nulos porque,
//quando o usuario cria um novo cadastro já cria
//uma tabela endereços relacionada ao usuario

//essa classe faz o mesmo que a classe Atualizar
class Cadastrar {
  async cadastrar(req, res) {
    try {
      const usuarioID = req.params.usuario_id;
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
            UsuarioId: usuarioID,
          },
        }
      );
      if (cadastrado[0] === 1) {
        res.status(201).send({
          criado: true,
        });
      } else {
        res.status(400).send({ criado: false });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Cadastrar();
