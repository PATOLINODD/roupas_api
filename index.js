const chalk = require("chalk");
const App = require("./src/infra/customExpress");
const db = require("./src/infra/database");

const database = db.sync({ alter: true, force: true });

database
  .then((resolves) => console.log(resolves))
  .catch((error) => console.log(error));

console.log(chalk.bgGreen(chalk.yellow("database iniciada com sucesso!")));
App.listen(
  3000,
  "localhost",
  console.log(chalk.bgGreen(chalk.blue("roupas api rodando na porta 3000")))
);
