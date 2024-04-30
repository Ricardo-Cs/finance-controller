import { Repository } from "typeorm";
import { DebitPurchase } from "../../../database/typeorm/entities/DebitPurchase";
import { AppDataSource } from "../../../database/typeorm/data-source";
import { IDebitPurchaseRepository } from "../../interfaces/IDebitPurchaseRepository";

export class TypeormDebitPurchaseRepository implements IDebitPurchaseRepository {
    private typeorm: Repository<DebitPurchase>;

    constructor() {
        this.typeorm = AppDataSource.getRepository(DebitPurchase);
    }

    async insert(debitPurchase: DebitPurchase) {
        return await this.typeorm.save(debitPurchase);
    }

    async selectByCard(cardId: number) {
        return await this.typeorm.find({
            where: {
                card: { id: cardId }
            }
        });
    }

    async delete(purchaseId: number) {
        await this.typeorm.delete({ id: purchaseId });
        return;
    }

}