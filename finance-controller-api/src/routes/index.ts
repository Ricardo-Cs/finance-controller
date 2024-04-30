import { Router } from "express";
import user from "./userRoutes";
import card from "./cardRoutes";
import creditPurchase from "./creditPurchaseRoutes";
import debitPurchase from "./debitPurchaseRoutes";

const router = Router();

router.use('/user', user);
router.use('/card', card);
router.use('/creditPurchase', creditPurchase);
router.use('/debitPurchase', debitPurchase);

router.all('*', (req, res) => {
    return res.status(404).json('Rota inexistente!');
});

export default router;