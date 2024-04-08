import express from "express";
import "reflect-metadata";
import router from "./routes";
import { AppDataSource } from "./database/typeorm/data-source";

const app = express();

app.use(express.json());
app.use(router);
AppDataSource.initialize();

export default app;