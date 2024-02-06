const { Router } = require('express');
const routes = Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');
const isAuthenticated = require('../middlewares/isAuthenticated');

// Google auth
routes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' }));
routes.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/auth/google/success');
});
routes.get('/google/success', isAuthenticated, authController.googleLoginSuccess);

// Local auth
routes.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }), (req, res) => {
    res.redirect('login/success');
});
routes.get('/login/success', isAuthenticated, authController.localLoginSuccess);

routes.get('/logout', authController.logout);

// Register 
routes.post('/register', authController.registerUser);

module.exports = routes;