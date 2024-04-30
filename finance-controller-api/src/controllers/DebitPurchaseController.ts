import { Request, Response } from "express";
import { TypeormDebitPurchaseRepository } from "../repositories/implementations/typeorm/Typeorm-debitPurchase-repository";
import { IDebitPurchaseRepository } from "../repositories/interfaces/IDebitPurchaseRepository";
import { DebitPurchaseService } from "../services/DebitPurchaseService";

export class DebitPurchaseController {
    private debitPurchaseRepository: IDebitPurchaseRepository;
    private debitPurchaseService: DebitPurchaseService;

    constructor() {
        this.debitPurchaseRepository = new TypeormDebitPurchaseRepository();
        this.debitPurchaseService = new DebitPurchaseService(this.debitPurchaseRepository);
    }

    async insert(req: Request, res: Response) {
        const result = await this.debitPurchaseService.insert(req.body);
        return res.status(result.status).json({ message: result.message });
    }

    async selectByCard(req: Request, res: Response) {
        const result = await this.debitPurchaseService.selectByCard(Number(req.params.id));
        return res.status(result.status).json({ message: result.message, purchases: result.purchases });
    }

    async delete(req: Request, res: Response) {
        const result = await this.debitPurchaseService.delete(Number(req.params.id));
        return res.status(result.status).json({ message: result.message });
    }
}