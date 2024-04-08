import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.post('/', (req, res, next) => {
    userController.insert(req, res, next);
});

export default routes;