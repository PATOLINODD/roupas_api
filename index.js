const chalk = require("chalk");
const App = require("./src/infra/customExpress");
const db = require("./src/infra/database");

db.sync({ alter: true, force: true }); //sincronizando banco de dados

console.log(chalk.bgGreen(chalk.yellow("database iniciada com sucesso!")));

//subindo servidor
App.listen(
  3000,
  "localhost",
  console.log(chalk.bgGreen(chalk.blue("roupas api rodando na porta 3000")))
);
