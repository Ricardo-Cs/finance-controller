const passport = require('passport');
const ENV = require('../utils/env');
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
}

module.exports = {
    loginWithGoogle
};