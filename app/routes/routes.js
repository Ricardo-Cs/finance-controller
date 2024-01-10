const express = require('express');
const router = express.Router();
const auth = require('./auth.routes');

router.get('/', (req, res) => {
    res.render('login');
});

router.use('/auth', auth);

module.exports = router;