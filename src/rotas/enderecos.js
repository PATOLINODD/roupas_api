const Enderecos = require("../controladores/Enderecos");

module.exports = (App) => {
  App.get("/enderecos/:id", Enderecos.listarID);
  App.post("/enderecos/cadastrar/:id", Enderecos.cadastrar);
  App.put("/enderecos/atualizar/:id", Enderecos.atualizar);
  App.delete("/enderecos/deletar/:id", Enderecos.deletar);
};
