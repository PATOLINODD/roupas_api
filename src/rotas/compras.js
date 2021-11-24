//importação das classe de compras
const {
  Cadastrar,
  ListarID,
  Deletar,
} = require("../controladores/compras/index");

module.exports = (App) => {
  /**rotas para controlar as ações da classe de compras
   * todas as rotas vão chamar cada metodo que por consequencia iram
   * realizar suas funções
   */
  App.post("/compras/cadastrar", Cadastrar.cadastrar);
  App.get("/compras/:usuario_id", ListarID.listarID);
  App.delete("/compras/deletar/:id", Deletar.deletar);
};
