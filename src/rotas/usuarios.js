//importação das classes Usuarios
const {
  Cadastrar,
  ListarID,
  Atualizar,
  Deletar,
} = require("../controladores/usuarios/index");

module.exports = (App) => {
  /**rotas para controlar as ações da classe de Usuarios
   * todas as rotas vão chamar cada metodo que por consequencia iram
   * realizar suas funções
   */
  App.get("/usuarios/:id", ListarID.listarID);
  App.post("/usuarios/cadastrar", Cadastrar.cadastrar);
  App.put("/usuarios/atualizar/:id", Atualizar.atualizar);
  App.delete("/usuarios/deletar/:id", Deletar.deletar);
};
