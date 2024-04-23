import express from "express";
import "reflect-metadata";
import router from "./routes";
import { AppDataSource, initializeDatabase } from "./database/typeorm/data-source";
import cors from "cors";
import { config } from "dotenv";

config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
initializeDatabase();

export default app;