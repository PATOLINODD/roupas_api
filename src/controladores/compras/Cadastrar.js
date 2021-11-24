const { compras } = require("../../modelos/index");

//classe reponsavel pelo criação de uma nova compra
class Compras {
  async cadastrar(req, res) {
    try {
      const { usuario_id, roupas_id } = req.body;
      const tabela = await compras.create({
        usuario_id: usuario_id,
        roupas_id: roupas_id,
      });

      /** o mesmo que ...
       * INSERT INTO Compras (usuario_id, roupas_id)
       * VALUES (?, ?)
       */
      if (tabela) {
        res.status(201).send({
          criado: true,
        });
      } else {
        res.status(400).send({
          criado: false,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Compras();
