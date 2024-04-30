import { Router } from "express";
import { DebitPurchaseController } from "../controllers/DebitPurchaseController";

const routes = Router();
const debitPurchaseController = new DebitPurchaseController();

routes.get('/:id', (req, res) => {
    debitPurchaseController.selectByCard(req, res);
});

routes.post('/', (req, res) => {
    debitPurchaseController.insert(req, res);
});

routes.delete('/:id', (req, res) => {
    debitPurchaseController.delete(req, res);
});

export default routes;