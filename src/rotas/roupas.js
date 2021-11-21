//importação das classes de Roupas
const {
  ListarTodos,
  ListarID,
  Cadastrar,
  Atualizar,
  Deletar,
} = require("../controladores/roupas/index");

module.exports = (App) => {
  /**rotas para controlar as ações da classe de Roupas
   * todas as rotas vão chamar cada metodo que por consequencia iram
   * realizar suas funções
   */
  App.get("/roupas", ListarTodos.listarTodos);
  App.get("/roupas/:id", ListarID.listarID);
  App.post("/roupas/cadastrar", Cadastrar.cadastrar);
  App.put("/roupas/atualizar/:id", Atualizar.atulizar);
  App.delete("/roupas/deletar/:id", Deletar.deletar);
};
