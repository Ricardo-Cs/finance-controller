import { DebitPurchase } from "../../database/typeorm/entities/DebitPurchase";

export interface IDebitPurchaseRepository {
    insert(debitPurchase: DebitPurchase): Promise<DebitPurchase>;
    selectByCard(cardId: number): Promise<DebitPurchase[]>;
    delete(purchaseId: number): Promise<void>;
};