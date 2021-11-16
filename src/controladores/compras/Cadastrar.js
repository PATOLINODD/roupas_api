const { compras } = require("../../modelos/index");

class Compras {
  async cadastrar(req, res) {
    try {
      const { usuario_id, roupas_id } = req.body;
      const tabela = await compras.create({
        usuario_id: usuario_id,
        roupas_id: roupas_id,
      });
      if (tabela) {
        res.status(201).send({
          criado: true,
          tabela: tabela,
        });
      } else {
        res.status(400).send({
          criado: false,
          tabela: tabela,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Compras();
