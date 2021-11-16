const {
  ListarID,
  Cadastrar,
  Atualizar,
  Deletar,
} = require("../controladores/CartaoCredito/index");

module.exports = (App) => {
  App.get("/cartaocredito/:id", ListarID.listarID);
  App.post("/cartaocredito/cadastrar/:id", Cadastrar.cadastrarCartao);
  App.put("/cartaocredito/atualizar/:id", Atualizar.atualizar);
  App.delete("/cartaocredito/deletar/:id", Deletar.deletar);
};
