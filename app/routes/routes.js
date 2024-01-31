const express = require('express');
const router = express.Router();
const auth = require('./auth.routes');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.get('/', isAuthenticated, (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    let errorMessage = null;

    if (req.session.messages && req.session.messages.length > 0) {
        errorMessage = req.session.messages[0];

        req.session.messages = [];
    }

    res.render('login', { errorMessage });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.use('/auth', auth);

router.use((req, res) => {
    res.render('notFound');
});

module.exports = router;