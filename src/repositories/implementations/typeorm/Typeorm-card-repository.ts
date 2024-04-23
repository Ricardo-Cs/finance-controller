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

    async update(userId: number, dataToUpdate: any) {
        const updateCard = await this.typeorm.createQueryBuilder()
            .update(Card)
            .set(dataToUpdate)
            .where("user_id_fk = :id", { id: userId })
            .execute()

        return updateCard.affected;
    }
}