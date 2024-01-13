const passport = require('passport');
const ENV = require('../utils/env');
const googleAuthDal = require('../database/dal/googleAuthDal');
const { findOneByEmail } = require('../database/dal/userDal');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
let userProfile;

passport.use(new GoogleStrategy(
    {
        clientID: ENV.GOOGLE_CLIENT_ID,
        clientSecret: ENV.GOOGLE_CLIENT_SECRET_KEY,
        callbackURL: ENV.GOOGLE_CALLBACK_URL
    },
    function (acessToken, refreshToken, profile, done) {
        userProfile = profile;
        return done(null, userProfile);
    }
));

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async function (email, password, done) {
        try {
            const user = await findOneByEmail(email);

            if (!user) {
                return done(null, false, { message: 'Usuário não encontrado.' });
            }

            if (user.googleId) {
                return done(null, false, { message: 'Este usuário está associado a uma conta do Google.' })
            }

            if (user.password !== password) {
                return done(null, false, { message: 'Senha incorreta.' });
            }

            userProfile = user;
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

const googleLoginSuccess = async (req, res) => {
    const { failure, success } = await googleAuthDal.registerWithGoogle(userProfile);
    if (failure) console.log('Google user already exist in DB..');
    else console.log('Registering new Google user..');
    res.render('home', { user: userProfile });
};

const logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            console.log('session destroyed.');
        });
        res.render('login');
    } catch (err) {
        res.status(400).send({ message: 'Failed to sign out user' });
    }
};

const localLoginSuccess = (req, res) => {
    res.render('home', { user: userProfile });
};

module.exports = {
    googleLoginSuccess,
    localLoginSuccess,
    logout
};