import { Router } from "express";
import { CreditPurchaseController } from "../controllers/CreditPurchaseController";

const routes = Router();
const creditPurchaseController = new CreditPurchaseController();

routes.get('/:id', (req, res) => {
    creditPurchaseController.selectByInvoice(req, res);
});

routes.post('/', (req, res) => {
    creditPurchaseController.insert(req, res);
});

routes.delete('/:id', (req, res) => {
    creditPurchaseController.delete(req, res);
});

export default routes;