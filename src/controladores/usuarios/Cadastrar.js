const { usuarios } = require("../../modelos/index");
const { CadastrarUsuarioIDNoCartao } = require("../cartaoCredito/index");
const { CadastrarUsuarioIDNoEndereco } = require("../enderecos/index");

class Cadastrar {
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
        CadastrarUsuarioIDNoCartao.cadatrarUsuarioID(tabela.id);
        CadastrarUsuarioIDNoEndereco.cadastrarUsuarioID(tabela.id);
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
}

module.exports = new Cadastrar();
