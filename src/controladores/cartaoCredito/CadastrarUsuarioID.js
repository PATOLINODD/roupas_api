const { cartaoCredito } = require("../../modelos/index");

class CadatrarUsuarioID {
  async cadatrarUsuarioID(id) {
    try {
      await cartaoCredito.create({
        usuario_id: id,
      });
    } catch (error) {
      res.status(400).send({ msgErro: error });
    }
  }
}
module.exports = new CadatrarUsuarioID();
