const User = require("../models/user");

const findOneById = async (userId) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        return user;
    } catch (error) {
        console.error('Erro ao buscar id no banco: ', error);
    }
};

const findOneByEmail = async (email) => {
    try {
        const user = await User.findOne({ where: { email: email } });
        return user;
    } catch (error) {
        console.error('Erro ao buscar id no banco: ', error);
    }
};

module.exports = {
    findOneById,
    findOneByEmail
};