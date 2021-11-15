const roupas = require("../modelos/Roupas");

class Roupas {
  async listarTodos(req, res) {
    try {
      const lista = await roupas.findAll();
      if (lista.length > 0) {
        res.send(lista);
      } else {
        res.status(404).send({ "nenhuma tabela foi encontrada": lista.length });
      }
    } catch (e) {
      res.status(400).send({ msgErro: e });
    }
  }
  async listarID(req, res) {
    try {
      const id = req.params.id;
      const lista = await roupas.findByPk(id);
      console.log(lista);
      if (lista) {
        res.send({
          correspondência: lista,
        });
      } else {
        res.status(404).send({
          correspondência: lista,
          id: id,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
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
  async atulizarID(req, res) {
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
  async deletar(req, res) {
    try {
      const id = req.params.id;
      const deletado = await roupas.destroy({
        where: {
          id: id,
        },
      });
      if (deletado[0] >= 1) {
        res.send({
          status: "deletado",
          quantidade: deletado,
          id: id,
        });
      } else {
        res.send({ correspondência: deletado, id: id });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Roupas();
