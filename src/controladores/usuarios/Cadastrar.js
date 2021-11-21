const { usuarios } = require("../../modelos/index"); //tabela para manipulação dos registros

//metodo para cadastrar um campo com id de usuario pro cartão
const { CadastrarUsuarioIDNoCartao } = require("../cartaoCredito/index");

//o mesmo que o anterior mas relacionar o usuario ao endereço
const { CadastrarUsuarioIDNoEndereco } = require("../enderecos/index");

class Cadastrar {
  async cadastrar(req, res) {
    try {
      const usuario = req.body;
      const tabela = await usuarios.create({
        nome: usuario.nome,
        email: usuario.email,
        senha: usuario.senha,
      });
      if (tabela) {
        res.status(201).send({
          criado: true,
          tabela: tabela,
        });
        /*quando usuario for cadastrado os metodos relacionados a ele serão chamados
         *e irá criar os registros com seu id como chave estrangeira em cada tabela
         */
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
