const { loginOrCreateWithGoogle, registerUserWithLocal } = require('../services/auth.service');

const googleLoginSuccess = async (req, res) => {
    try {
        const user = await loginOrCreateWithGoogle(req.user);
        res.render('home', { user: user });
    } catch (error) {
        res.status(400).send({ message: 'Falha ao logar com google.' })
    }
};

const localLoginSuccess = (req, res) => {
    res.render('home', { user: req.user });
};

const logout = async (req, res) => {
    try {
        req.session.destroy((err) => {
            console.log('Sessão destruída.');
        });
        res.render('login');
    } catch (error) {
        res.status(400).send({ message: 'Falha ao fazer logout do usuário.' });
    }
};

const registerUser = async (req, res) => {
    try {
        const userData = req.body;
        const { errorMessage, successMessage } = await registerUserWithLocal(userData);

        if (errorMessage) {
            return res.render('register', { errorMessage });
        }

        if (successMessage) {
            return res.render('login', { successMessage });
        }

        return res.status(400).send({ message: 'Falha ao fazer cadastro do usuário.' });
    } catch (error) {
        return res.status(400).send({ message: 'Falha ao fazer cadastro do usuário.' });
    }
};


module.exports = {
    googleLoginSuccess,
    localLoginSuccess,
    logout,
    registerUser
};