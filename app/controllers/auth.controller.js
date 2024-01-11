const passport = require('passport');
const ENV = require('../utils/env');
const googleAuthDal = require('../database/dal/googleAuthDal');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
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

const loginWithGoogle = (req, res) => {
    res.render('home');
};

const googleLoginSucess = async (req, res) => {
    const { failure, success } = await googleAuthDal.registerWithGoogle(userProfile);
    if (failure) console.log('Google user already exist in DB..');
    else console.log('Registering new Google user..');
    res.render('home', { user: userProfile });
};

module.exports = {
    loginWithGoogle,
    googleLoginSucess
};