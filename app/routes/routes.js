const express = require('express');
const router = express.Router();
const auth = require('./auth.routes');
const isAuthenticated = require('../middlewares/isAuthenticated');

router.get('/', isAuthenticated, (req, res) => {
    res.render('home');
});

router.get('/login', (req, res) => {
    let customMessage = false;
    if (req.session.messages != undefined && req.session.messages.length != 0) {
        customMessage = req.session.messages[0];
    }
    res.render('login', { message: customMessage });
});

router.get('/register', (req, res) => {
    res.render('register', { message: false });
});

router.use('/auth', auth);

router.use((req, res) => {
    res.render('notFound');
});

module.exports = router;