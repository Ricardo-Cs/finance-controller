const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/config");
const User = require('./user');

const CreditCard = sequelize.define('credit_cards', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    limit: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    currentDebt: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
    dueDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    closingDate: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

CreditCard.belongsTo(User);

module.exports = CreditCard;