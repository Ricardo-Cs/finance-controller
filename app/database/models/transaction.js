const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/config");
const CreditCard = require('./creditCard');

const Transaction = sequelize.define('transactions', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    installmentCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
});

Transaction.belongsTo(CreditCard);

module.exports = Transaction;