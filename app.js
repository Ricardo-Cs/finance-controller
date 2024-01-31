const express = require('express');
const connectDbAndSyncModels = require('./app/database/config/sync');
const router = require('./app/routes/routes');
const ENV = require('./app/utils/env');
const passport = require('passport');
const session = require('express-session');
const app = express();
const cors = require('cors');

connectDbAndSyncModels();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: ENV.SESSION_SECRET
    })
);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

// Por padrão, message é false, assim não é necessário enviar { message: false } sempre que chamar uma view
app.use(function (req, res, next) {
    res.locals.errorMessage = false;
    res.locals.successMessage = false;
    next();
});

passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

app.use(router);

module.exports = app;