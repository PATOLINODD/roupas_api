const { roupas } = require("../../modelos/index");

//deleção dos dados
class Deletar {
  async deletar(req, res) {
    try {
      const id = req.params.id;
      const deletado = await roupas.destroy({
        where: {
          id: id,
        },
      });
      /** o mesmo que ...
       * DELETE FROM Roupas WHERE id = ?
       */
      console.log(deletado);
      if (deletado) {
        res.send({ deletado: true });
      } else {
        res.status(400).send({ deletado: false });
      }
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}

module.exports = new Deletar();
