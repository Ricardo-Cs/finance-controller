const express = require('express');
const ENV = require('./app/utils/env');
const connectDbAndSyncModels = require('./app/database/config/sync');

connectDbAndSyncModels();
// Configura servidor
const app = express();
app.use('/public', express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/login.html'));

app.listen(ENV.APP_PORT, () => console.log(`Servidor escutando a porta ${ENV.APP_PORT}`));