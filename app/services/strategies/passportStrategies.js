const passport = require('passport');
const ENV = require('../../utils/env');
const { comparePassword } = require('../../utils/crypt');
const { findOneUserByEmail } = require('../../database/dal/userDal');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LocalStrategy = require('passport-local').Strategy;
let userProfile;

// Passport login with google
passport.use(new GoogleStrategy(
    {
        clientID: ENV.GOOGLE_CLIENT_ID,
        clientSecret: ENV.GOOGLE_CLIENT_SECRET_KEY,
        callbackURL: ENV.GOOGLE_CALLBACK_URL
    },
    function (accessToken, refreshToken, profile, done) {
        userProfile = profile;
        return done(null, userProfile);
    }
));


// Local login
passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    async function (email, password, done) {
        try {
            const user = await findOneUserByEmail(email);

            if (!user || !(await comparePassword(password, user.password))) {
                return done(null, false, { message: 'Usuário ou senha incorretos' });
            }

            if (user.googleId) {
                return done(null, false, { message: 'Este usuário está associado a uma conta do Google.' })
            }

            userProfile = user;
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));