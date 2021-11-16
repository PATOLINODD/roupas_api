const { Cadastrar, ListarID } = require("../controladores/compras/index");

module.exports = (App) => {
  App.post("/compras/cadastrar", Cadastrar.cadastrar);
  App.get("/compras/:id", ListarID.listarID);
};
