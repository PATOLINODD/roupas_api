const { compras } = require("../../modelos/index");

//classe Deletar responsavel pela destruição dos dados de compras
class Deletar {
  async deletar(req, res) {
    try {
      const id = req.params.id;
      const deletado = await compras.destroy({ where: { id: id } });
      /** o mesmo que ...
       * DELETE FROM Compras WHERE id = ?
       * lembrando que o id (chave primaria) é criado por padrão em cada tabela
       */
      if (deletado) {
        res.send({
          deletado: true,
        });
      } else {
        res.status(400).send({
          deletado: false,
        });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Deletar();
