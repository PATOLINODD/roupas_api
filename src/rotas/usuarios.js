const Usuarios = require("../controladores/Usuarios");

module.exports = (App) => {
  App.get("/usuarios", Usuarios.listarTodos);
  App.get("/usuarios/:id", Usuarios.listarID);
  App.post("/usuarios/cadastrar", Usuarios.cadastrar);
  App.put("/usuarios/atualizar/:id", Usuarios.atualizar);
  App.delete("/usuarios/deletar/:id", Usuarios.deletar);
};
