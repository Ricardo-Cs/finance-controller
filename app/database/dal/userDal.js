const User = require("../models/user");

const findOneById = async (userId) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        return user;
    } catch (error) {
        console.error('Erro ao buscar id no banco: ', error);
    }
};

const findOneByUsername = async (username) => {
    try {
        const user = await User.findOne({ where: { name: username } });
        return user;
    } catch (error) {
        console.error('Erro ao buscar id no banco: ', error);
    }
};

module.exports = {
    findOneById,
    findOneByUsername
};