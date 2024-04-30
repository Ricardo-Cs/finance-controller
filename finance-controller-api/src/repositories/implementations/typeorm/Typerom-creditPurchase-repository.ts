import { Repository } from "typeorm";
import { CreditPurchase } from "../../../database/typeorm/entities/CreditPurchase";
import { ICreditPurchaseRepository } from "../../interfaces/ICreditPurchaseRepository";
import { AppDataSource } from "../../../database/typeorm/data-source";

export class TypeormCreditPurchaseRepository implements ICreditPurchaseRepository {
    private typeorm: Repository<CreditPurchase>;

    constructor() {
        this.typeorm = AppDataSource.getRepository(CreditPurchase);
    }

    async insert(creditPurchase: CreditPurchase) {
        return await this.typeorm.save(creditPurchase);
    }

    async selectByInvoice(invoiceId: number) {
        return await this.typeorm.find({
            where: {
                invoice: { id: invoiceId }
            }
        })
    }

    async delete(purchaseId: number) {
        await this.typeorm.delete({ id: purchaseId });
        return;
    }

}