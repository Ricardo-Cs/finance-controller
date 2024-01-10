const { Router } = require('express');
const routes = Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');

routes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
routes.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/auth/google/sucess');
});
routes.get('/google/sucess', authController.googleLoginSucess);

module.exports = routes;