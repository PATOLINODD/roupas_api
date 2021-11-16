const { roupas } = require("../../modelos/index");

class Cadastrar {
  async cadastrar(req, res) {
    try {
      const roupa = req.body;
      const [tabela, created] = await roupas.findOrCreate({
        where: {
          peca: roupa.peca,
          modelo: roupa.modelo,
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
      if (created) {
        res.status(201).send({
          criado: created,
          tabela: tabela,
        });
      } else {
        res.send({ "tabela a ser inserida já existe": tabela });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Cadastrar();
