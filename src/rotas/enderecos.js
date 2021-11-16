const {
  ListarUsuarioID,
  Cadastrar,
  Atualizar,
  Deletar,
} = require("../controladores/enderecos/index");

module.exports = (App) => {
  App.get("/enderecos/:id", ListarUsuarioID.listarUsuarioID);
  App.post("/enderecos/cadastrar/:id", Cadastrar.cadastrar);
  App.put("/enderecos/atualizar/:id", Atualizar.atualizar);
  App.delete("/enderecos/deletar/:id", Deletar.deletar);
};
