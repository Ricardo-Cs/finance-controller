import { Request, Response, Router } from "express";
import { UserController } from "../controllers/UserController";
import { insertUserValidator } from "../core/validators/insertUserValidator";
import { handleValidationErrors } from "../core/validators/handleValidators";
import authMiddleware from "../core/middlewares/jwtAuthentication";

const routes = Router();
const userController = new UserController();

routes.get('/', (req, res) => {
    userController.selectAll(req, res);
});

routes.get('/data', authMiddleware, (req, res, next) => {
    userController.selectById(req, res, next);
});

routes.post('/', insertUserValidator, handleValidationErrors, (req: Request, res: Response) => {
    userController.insert(req, res);
});

routes.post('/login', (req, res) => {
    userController.login(req, res);
});

export default routes;