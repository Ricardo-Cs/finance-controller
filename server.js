const app = require("./app");
const ENV = require("./app/utils/env");

app.listen(ENV.APP_PORT, () => console.log(`Servidor escutando a porta ${ENV.APP_PORT}`));
