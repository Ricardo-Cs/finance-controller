import { Router } from "express";
import { CardController } from "../controllers/CardController";

const routes = Router();
const cardController = new CardController();

routes.get('/:id', (req, res) => {
    cardController.selectByUserId(req, res);
});

routes.post('/', (req, res) => {
    cardController.insert(req, res);
});

routes.put('/', (req, res) => {
    cardController.update(req, res);
});

export default routes;