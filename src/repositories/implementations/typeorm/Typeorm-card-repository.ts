import { Repository } from "typeorm";
import { Card } from "../../../database/typeorm/entities/Card";
import { ICardRepository } from "../../interfaces/ICardRepository";
import { AppDataSource } from "../../../database/typeorm/data-source";

export class TypeormCardRepository implements ICardRepository {
    private typeorm: Repository<Card>;

    constructor() {
        this.typeorm = AppDataSource.getRepository(Card);
    }

    async insert(card: Card) {
        return await this.typeorm.save(card);
    }

    async selectByUserId(userId: number) {
        return await this.typeorm.find({
            where: {
                user: { id: userId }
            }
        });
    }

    async update(cardId: number, dataToUpdate: any) {
        const cardToUpdate: any = await this.typeorm.findOne({
            where: {
                id: cardId
            }
        });

        Object.assign(cardToUpdate, dataToUpdate);

        const updateResult = await this.typeorm.save(cardToUpdate);

        return updateResult;
    }
}