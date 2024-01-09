const express = require('express');
const ENV = require('./app/utils/env');
const connectToDatabase = require('./app/database/dbconnect');

// Configura servidor
const app = express();
connectToDatabase();
app.use('/public', express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/login.html'));

app.listen(ENV.APP_PORT, () => console.log(`Servidor escutando a porta ${ENV.APP_PORT}`));