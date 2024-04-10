import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();
const userController = new UserController();

routes.get('/', (req, res) => {
    userController.selectAll(req, res);
});

routes.post('/', (req, res) => {
    userController.insert(req, res);
});

routes.post('/login', (req, res) => {
    userController.login(req, res);
});

export default routes;