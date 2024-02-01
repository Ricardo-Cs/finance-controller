const { hashPassword } = require("../../utils/crypt");
const User = require("../models/user");

const findOneUserById = async (userId) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        return user;
    } catch (error) {
        console.error('Erro ao buscar id no banco: ', error);
    }
};

const findOneUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ where: { email: email } });
        return user;
    } catch (error) {
        console.error('Erro ao buscar email no banco: ', error);
    }
};

const insertUser = async (user) => {
    try {
        const passwordHash = await hashPassword(user.password.toLowerCase());
        user.password = passwordHash;
        await User.create(user);
        return true;
    } catch (error) {
        console.error('Erro ao inserir usuário no banco: ', error);
        return false;
    }
};

module.exports = {
    findOneUserById,
    findOneUserByEmail,
    insertUser
};