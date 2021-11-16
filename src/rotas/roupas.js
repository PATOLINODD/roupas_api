const {
  ListarTodos,
  ListarID,
  Cadastrar,
  Atualizar,
  Deletar,
} = require("../controladores/roupas/index");

module.exports = (App) => {
  App.get("/roupas", ListarTodos.listarTodos);
  App.get("/roupas/:id", ListarID.listarID);
  App.post("/roupas/cadastrar", Cadastrar.cadastrar);
  App.put("/roupas/atualizar/:id", Atualizar.atulizar);
  App.delete("/roupas/deletar/:id", Deletar.deletar);
};
