const Roupas = require("../controladores/Roupas");

module.exports = (App) => {
  App.get("/roupas", Roupas.listarTodos);
  App.get("/roupas/:id", Roupas.listarID);
  App.post("/roupas/cadastrar", Roupas.cadastrar);
  App.put("/roupas/atualizar/:id", Roupas.atulizarID);
  App.delete("/roupas/deletar/:id", Roupas.deletar);
};
