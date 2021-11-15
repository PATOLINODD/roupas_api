const Credito = require("../controladores/CartaoCredito");

module.exports = (App) => {
  App.get("/cartaocredito/:id", Credito.listarID);
  App.post("/cartaocredito/cadastrar/:id", Credito.cadastrarCartao);
  App.put("/cartaocredito/atualizar/:id", Credito.atualizar);
  App.delete("/cartaocredito/deletar/:id", Credito.deletar);
};
