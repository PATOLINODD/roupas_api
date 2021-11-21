//importação das classe de cartão de credito
const {
  ListarID,
  Cadastrar,
  Atualizar,
  Deletar,
} = require("../controladores/CartaoCredito/index");

module.exports = (App) => {
  /**rotas para controlar as ações da classe de cartão de credito
   * todas as rotas vão chamar cada metodo que por consequencia iram
   * realizar suas funções
   */
  App.get("/cartaocredito/:usuario_id", ListarID.listarID);
  App.post("/cartaocredito/cadastrar/:id", Cadastrar.cadastrarCartao);
  App.put("/cartaocredito/atualizar/:id", Atualizar.atualizar);
  App.delete("/cartaocredito/deletar/:id", Deletar.deletar);
};
