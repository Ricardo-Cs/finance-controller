import { DebitPurchase } from "../database/typeorm/entities/DebitPurchase";
import { IDebitPurchaseRepository } from "../repositories/interfaces/IDebitPurchaseRepository";

export class DebitPurchaseService {
    private repository: IDebitPurchaseRepository;

    constructor(repository: IDebitPurchaseRepository) {
        this.repository = repository;
    }

    async insert(debitPurchase: DebitPurchase) {
        const insertedPurchase = this.repository.insert(debitPurchase);

        if (!insertedPurchase) {
            return { status: 400, message: "Erro ao inserir compra no débito!" };
        }

        return { status: 201, message: "Compra inserida!" };
    }

    async selectByCard(cardId: number) {
        const purchases: DebitPurchase[] = await this.repository.selectByCard(cardId);

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