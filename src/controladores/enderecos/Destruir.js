const { enderecos } = require("../../modelos/index");

//classe Destruir chamada quando o usuario deletar a propria conta
class Destruir {
  async destruir(id) {
    try {
      await enderecos.destroy({
        where: {
          usuario_id: id,
        },
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Destruir();
