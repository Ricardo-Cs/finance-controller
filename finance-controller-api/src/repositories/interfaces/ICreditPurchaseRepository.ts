import { CreditPurchase } from "../../database/typeorm/entities/CreditPurchase";

export interface ICreditPurchaseRepository {
    insert(creditPurchase: CreditPurchase): Promise<CreditPurchase>;
    selectByInvoice(invoiceId: number): Promise<CreditPurchase[]>;
};