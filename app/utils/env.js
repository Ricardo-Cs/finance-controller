require('dotenv').config();

const ENV = {
    APP_PORT: process.env.PORT || 3000,
    DB_NAME: process.env.DB_NAME,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET_KEY: process.env.GOOGLE_CLIENT_SECRET_KEY,
    GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
    SESSION_SECRET: process.env.SESSION_SECRET
};

module.exports = ENV;