const express = require('express');
const router = express.Router();
const auth = require('./auth.routes');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register', { message: false });
});

router.use('/auth', auth);

router.use((req, res) => {
    res.render('notFound');
});

module.exports = router;