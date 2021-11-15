const chalk = require("chalk");
const App = require("./src/infra/customExpress");
const db = require("./src/infra/database");

db.sync();

console.log(chalk.bgGreen(chalk.yellow("database iniciada com sucesso!")));
App.listen(
  3000,
  "localhost",
  console.log(chalk.bgGreen(chalk.blue("roupas api rodando na porta 3000")))
);
