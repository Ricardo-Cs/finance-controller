const { Router } = require('express');
const routes = Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');
const isAuthenticated = require('../middlewares/isAuthenticated');

routes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
routes.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/auth/google/success');
});
routes.get('/google/success', isAuthenticated, authController.googleLoginSucess);
routes.get('/google/signout', authController.googleSignout);

module.exports = routes;