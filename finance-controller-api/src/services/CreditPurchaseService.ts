import { CreditPurchase } from "../database/typeorm/entities/CreditPurchase";
import { ICreditPurchaseRepository } from "../repositories/interfaces/ICreditPurchaseRepository";

export class CreditPurchaseService {
    private repository: ICreditPurchaseRepository;

    constructor(repository: ICreditPurchaseRepository) {
        this.repository = repository;
    }

    async insert(creditPurchase: CreditPurchase) {
        const insertedPurchase = this.repository.insert(creditPurchase);

        if (!insertedPurchase) {
            return { status: 400, message: "Erro ao inserir compra no crédito!" };
        }

        return { status: 201, message: "Compra inserida!" };
    }

    async selectByInvoice(invoiceId: number) {
        const purchases: CreditPurchase[] = await this.repository.selectByInvoice(invoiceId);

        if (!purchases) {
            return { status: 200, message: "Sem compras encontradas!", purchases: {} };
        }

        return { status: 200, purchases: purchases };
    }

    async delete(purchaseId: number) {
        await this.repository.delete(purchaseId);
        return { status: 200, message: "Deletado com sucesso!" };
    }
}