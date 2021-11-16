const {
  Cadastrar,
  ListarID,
  Atualizar,
  Deletar,
} = require("../controladores/usuarios/index");

module.exports = (App) => {
  App.get("/usuarios/:id", ListarID.listarID);
  App.post("/usuarios/cadastrar", Cadastrar.cadastrar);
  App.put("/usuarios/atualizar/:id", Atualizar.atualizar);
  App.delete("/usuarios/deletar/:id", Deletar.deletar);
};
