const app = require("./app");

const PORT = process.env.APP_PORT || 3333;

console.log(`Iniciando servidor na porta: ${PORT}`);
app.listen(PORT);
