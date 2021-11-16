const { roupas } = require("../../modelos/index");

class Atualizar {
  async atulizar(req, res) {
    try {
      const id = req.params.id;
      const roupa = req.body;
      const atualizado = await roupas.update(
        {
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
        {
          where: {
            id: id,
          },
        }
      );
      if (atualizado[0] >= 1) {
        res.send("tabela atualizada");
      } else {
        res.status(400).send("não foi possivel atualizar");
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Atualizar();
