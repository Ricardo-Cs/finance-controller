const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    } catch (err) {
        throw err;
    }
};

const comparePassword = async (password, hash) => {
    try {
        const compare = await bcrypt.compare(password, hash);
        return compare;
    } catch (error) {
        throw err;
    }
};


module.exports = {
    hashPassword,
    comparePassword
}