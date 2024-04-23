import { Router } from "express";
import user from "./userRoutes";
import card from "./cardRoutes";

const router = Router();

router.use('/user', user);
router.use('/card', card);

router.all('*', (req, res) => {
    return res.status(404).json('Rota inexistente!');
});

export default router;