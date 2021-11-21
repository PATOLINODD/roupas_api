const { enderecos } = require("../../modelos/index");

//quando o usuario faz um novo cadastro essa classe é chamada
class CadastrarUsuarioID {
  async cadastrarUsuarioID(id) {
    try {
      await enderecos.create({
        usuario_id: id,
      });
      /**o mesmo que ...
       * INSERT INTO Enderecos (usuario_id) VALUES (?)
       */
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new CadastrarUsuarioID();
