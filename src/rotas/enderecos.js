//importação das classes de endereços
const {
  ListarUsuarioID,
  Cadastrar,
  Atualizar,
  Deletar,
} = require("../controladores/enderecos/index");

module.exports = (App) => {
  /**rotas para controlar as ações da classe de endereços
   * todas as rotas vão chamar cada metodo que por consequencia iram
   * realizar suas funções
   */
  App.get("/enderecos/:usuario_id", ListarUsuarioID.listarUsuarioID);
  App.post("/enderecos/cadastrar/:id", Cadastrar.cadastrar);
  App.put("/enderecos/atualizar/:id", Atualizar.atualizar);
  App.delete("/enderecos/deletar/:id", Deletar.deletar);
};
