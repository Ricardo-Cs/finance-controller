import { Router } from "express";
import user from "./userRoutes";

const router = Router();

router.use('/user', user);

router.all('*', (req, res) => {
    return res.status(404).json('Rota inexistente!');
});

export default router;