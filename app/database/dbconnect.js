const { Sequelize } = require("sequelize");
const ENV = require("../utils/env");

const connectToDatabase = async () => {
    try {
        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT,
            logging: false
        });

        await sequelize.authenticate();
        console.log('Conexão com o banco de dados realizada');

        // Retorne o objeto sequelize ou qualquer outra coisa que você precisar
        return sequelize;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados: ' + error);
        throw error;
    }
};

module.exports = connectToDatabase;