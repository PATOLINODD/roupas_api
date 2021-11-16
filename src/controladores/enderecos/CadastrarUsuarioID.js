const { enderecos } = require("../../modelos/index");

class CadastrarUsuarioID {
  async cadastrarUsuarioID(id) {
    try {
      await enderecos.create({
        usuario_id: id,
      });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CadastrarUsuarioID();
