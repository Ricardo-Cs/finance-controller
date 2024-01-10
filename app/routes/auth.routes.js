const { Router } = require('express');
const routes = Router();
const authController = require('../controllers/auth.controller');
const passport = require('passport');

routes.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))
routes.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), authController.loginWithGoogle);

module.exports = routes;