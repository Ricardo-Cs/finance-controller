const googleAuthDal = require('../database/dal/googleAuthDal');
const { findOneUserByEmail, insertUser } = require('../database/dal/userDal');


const loginOrCreateWithGoogle = async (user) => {
    const userData = await googleAuthDal.registerWithGoogle(user);
    user.name = user.displayName;
    return user;
};

const registerUserWithLocal = async (user) => {
    const userExists = await findOneUserByEmail(user.email);

    if (userExists) {
        return { errorMessage: 'Usuário já existente! Tente novamente.' };
    }

    const insertedUser = await insertUser(user);

    if (insertedUser) {
        return { successMessage: 'Usuário criado com sucesso!' };
    }

    return { errorMessage: 'Falha ao criar usuário.' };
};

module.exports = {
    loginOrCreateWithGoogle,
    registerUserWithLocal
};