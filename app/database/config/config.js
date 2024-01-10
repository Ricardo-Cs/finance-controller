const { Sequelize } = require("sequelize");
const ENV = require("../../utils/env");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false
});

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados funcionando');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados: ' + error);
        throw error;
    }
};

module.exports = {
    connectToDatabase,
    sequelize,
};