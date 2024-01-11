const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config");

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,  // Permitir que seja nulo para usuários que fazem login com o Google
    },
    googleId: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,  // Permitir que seja nulo para usuários que fazem login com o Google
    }
});

module.exports = User;
