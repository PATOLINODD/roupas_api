//tabela pra manipulação dos dados
const { roupas } = require("../../modelos/index");

//classe Atualizr pra atualizar os dados na tabela referente ao usuario
class Atualizar {
  async atulizar(req, res) {
    try {
      const id = req.params.id;
      const roupa = req.body;
      const atualizado = await roupas.update(
        {
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
        {
          where: {
            id: id,
          },
        }
      );
      /**o mesmo que ...
       * UPDATE Roupas
       * SET peca = ?, modelo = ?, marca = ?, cor = ?, tamanho = ?, numeracao = ?,
       * genero = ?, faixa_etaria = ?, estacao = ?, preco = ?, estoque = ?
       */
      if (atualizado[0] >= 1) {
        res.send({ atualizado: true });
      } else {
        res.status(400).send({ atualizado: false });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Atualizar();
