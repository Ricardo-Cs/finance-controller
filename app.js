const express = require('express');
const connectDbAndSyncModels = require('./app/database/config/sync');
const router = require('./app/routes/routes');
const ENV = require('./app/utils/env');
const passport = require('passport');
const session = require('express-session');
const app = express();

connectDbAndSyncModels();

// Configura servidor
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: ENV.SESSION_SECRET
    })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

app.use(router);

module.exports = app;