const { cartaoCredito } = require("../../modelos/index");

/*quando usuario deletar sua propria conta, todos os dados
do cartão referente ao usuario serão excluidos */
class Destruir {
  async destruir(id) {
    try {
      await cartaoCredito.destroy({
        where: {
          usuario_id: id,
        },
      });
      /* o mesmo que...
      DELETE FROM  Cartao_credito 
      WHERE usuario_id = ?*/
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Destruir();
