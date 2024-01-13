const express = require('express');
const connectDbAndSyncModels = require('./app/database/config/sync');
const router = require('./app/routes/routes');
const ENV = require('./app/utils/env');
const passport = require('passport');
const session = require('express-session');
const app = express();
const cors = require('cors');
const { findOneById } = require('./app/database/dal/userDal');

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
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await findOneById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

app.use(router);

module.exports = app;