import { Request, Response } from "express";
import { TypeormCardRepository } from "../repositories/implementations/typeorm/Typeorm-card-repository";
import { ICardRepository } from "../repositories/interfaces/ICardRepository";
import { CardService } from "../services/CardService";

export class CardController {
    private cardRepository: ICardRepository;
    private cardService: CardService;

    constructor() {
        this.cardRepository = new TypeormCardRepository();
        this.cardService = new CardService(this.cardRepository);
    }

    async insert(req: Request, res: Response) {
        const result = await this.cardService.insert(req.body);
        return res.status(result.status).json({ message: result.message });
    }

    async selectByUserId(req: Request, res: Response) {
        const result = await this.cardService.selectByUserId(Number(req.params.id));
        return res.status(result.status).json({ message: result.message, users: result.cards });
    }

    async update(req: Request, res: Response) {
        const body = req.body;
        const { user, ...dataToUpdate } = body;

        const result = await this.cardService.update(user, dataToUpdate);
        return res.status(result.status).json({ message: result.message });
    }
}