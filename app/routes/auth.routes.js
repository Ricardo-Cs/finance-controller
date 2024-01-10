const { Router } = require('express');
const routes = Router();
const authController = require('../controllers/auth.controller');

routes.post('/login', authController.login);

module.exports = routes;