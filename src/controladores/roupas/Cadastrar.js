//importação da tabela pra manipulação dos dados
const { roupas } = require("../../modelos/index");

//classe Cadastrar para a criação dos dados na tabela
class Cadastrar {
  async cadastrar(req, res) {
    try {
      const roupa = req.body;
      const [tabela, created] = await roupas.findOrCreate({
        where: {
          peca: roupa.peca,
          modelo: roupa.modelo,
          estampa: roupa.estampa,
          marca: roupa.marca,
          cor: roupa.cor,
          tamanho: roupa.tamanho,
          numeracao: roupa.numeracao,
          genero: roupa.genero,
          faixa_etaria: roupa.faixa_etaria,
          estacao: roupa.estacao,
          preco: roupa.preco,
          estoque: roupa.estoque,
        },
      });
      /**o comando acima procura algum dado existente se não existir ele cria,
       * se existir ele mostra. Talvez ele use um comando INSERT ... ON DUPLICATE KEY UPDATE.
       * ou talvez use um comando por codigos pra uma melhor criação dos dados
       */
      if (created) {
        res.status(201).send({
          criado: created,
        });
      } else {
        res.status(400).send({
          criado: created,
          msgErro: "tabela já existe",
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Cadastrar();
