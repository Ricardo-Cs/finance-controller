const express = require('express');
const connectDbAndSyncModels = require('./app/database/config/sync');
const router = require('./app/routes/routes');
const app = express();

connectDbAndSyncModels();

// Configura servidor
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(router);

app.get('/', (req, res) => {
    res.render('login');
});

module.exports = app;