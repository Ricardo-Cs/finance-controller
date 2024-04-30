import { Request, Response } from "express";
import { TypeormCreditPurchaseRepository } from "../repositories/implementations/typeorm/Typerom-creditPurchase-repository";
import { ICreditPurchaseRepository } from "../repositories/interfaces/ICreditPurchaseRepository";
import { CreditPurchaseService } from "../services/CreditPurchaseService";

export class CreditPurchaseController {
    private creditPurchaseRepository: ICreditPurchaseRepository;
    private creditPurchaseService: CreditPurchaseService;

    constructor() {
        this.creditPurchaseRepository = new TypeormCreditPurchaseRepository();
        this.creditPurchaseService = new CreditPurchaseService(this.creditPurchaseRepository);
    }

    async insert(req: Request, res: Response) {
        const result = await this.creditPurchaseService.insert(req.body);
        return res.status(result.status).json({ message: result.message });
    }

    async selectByInvoice(req: Request, res: Response) {
        const result = await this.creditPurchaseService.selectByInvoice(Number(req.params.id));
        return res.status(result.status).json({ message: result.message, purchases: result.purchases });
    }

    async delete(req: Request, res: Response) {
        const result = await this.creditPurchaseService.delete(Number(req.params.id));
        return res.status(result.status).json({ message: result.message });
    }
}