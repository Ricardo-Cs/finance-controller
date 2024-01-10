const { sequelize, connectToDatabase } = require("./config");
const User = require('../models/user');
const CreditCard = require('../models/creditCard');
const Transaction = require('../models/transaction');
const Installment = require('../models/installment');

const syncModels = async () => {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error('Erro: ' + error);
    }
}

const connectDbAndSyncModels = async () => {
    await connectToDatabase();
    await syncModels();
}

module.exports = connectDbAndSyncModels;