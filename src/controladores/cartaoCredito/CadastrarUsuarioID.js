const { cartaoCredito } = require("../../modelos/index");

//classe chamada quando usuario fizer um novo cadastro
class CadatrarUsuarioID {
  async cadatrarUsuarioID(id) {
    try {
      const cartao = await cartaoCredito.create({
        usuario_id: id,
      });
      if (cartao) return { criado: true };
    } catch (error) {
      throw error;
    }
  }
}
module.exports = new CadatrarUsuarioID();
