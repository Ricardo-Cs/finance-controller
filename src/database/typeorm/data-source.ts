import { DataSource } from "typeorm";
import { config } from "dotenv";
import { User } from "./entities/User";

config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: false,
    logging: false,
    entities: [User],
    subscribers: [],
    migrations: [],
});

AppDataSource.initialize()
    .then(() => {
        console.log("Database is running...")
    })
    .catch((error) => console.log(error))