const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/config");
const Transaction = require('./transaction');

const Installment = sequelize.define('Installment', {
    installmentNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
});

Installment.belongsTo(Transaction);

module.exports = Installment;