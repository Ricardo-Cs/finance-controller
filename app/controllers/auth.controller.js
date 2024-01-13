const passport = require('passport');
const ENV = require('../utils/env');
const googleAuthDal = require('../database/dal/googleAuthDal');
const { findOneByUsername } = require('../database/dal/userDal');
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
    async function (username, password, done) {
        try {
            const user = await findOneByUsername(username);

            if (!user) {
                return done(null, false, { message: 'Usuário não encontrado' });
            }

            // Aqui você deve verificar a senha, por exemplo, usando bcrypt.compare
            // ou alguma outra lógica de verificação de senha
            if (user.password !== password) {
                return done(null, false, { message: 'Senha incorreta' });
            }

            // Se tudo estiver correto, retorne o usuário
            return done(null, user);
        } catch (error) {
            // Trate o erro conforme necessário
            return done(error);
        }
    }
));

const googleLoginSucess = async (req, res) => {
    const { failure, success } = await googleAuthDal.registerWithGoogle(userProfile);
    if (failure) console.log('Google user already exist in DB..');
    else console.log('Registering new Google user..');
    res.render('home', { user: userProfile });
};

const googleSignout = async (req, res) => {
    try {
        req.session.destroy(function (err) {
            console.log('session destroyed.');
        });
        res.render('login');
    } catch (err) {
        res.status(400).send({ message: 'Failed to sign out user' });
    }
};

module.exports = {
    googleLoginSucess,
    googleSignout
};