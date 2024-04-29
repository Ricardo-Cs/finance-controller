import { Card } from "../database/typeorm/entities/Card";
import { ICardRepository } from "../repositories/interfaces/ICardRepository";

export class CardService {
    private repository: ICardRepository;

    constructor(repository: ICardRepository) {
        this.repository = repository;
    }

    async insert(card: Card) {
        const cardExists = await this.repository.selectByUserId(card.user.id);

        if (!cardExists) {
            return { status: 400, message: "Cartão já existe!" };
        }

        const insertCard = await this.repository.insert(card);

        if (!insertCard) {
            return { status: 400, message: "Erro ao criar cartão, tente novamente!." };
        }

        return { status: 201, message: "Cartão criado!" };
    }

    async selectByUserId(userId: number) {
        const cards: Card[] | null = await this.repository.selectByUserId(userId);

        if (!cards) {
            return { status: 400, message: "Sem cartões encontrados!", cards: {} };
        }

        return { status: 200, cards: cards };
    }

    async update(cardId: number, dataToUpdate: any) {
        const updatedCard = await this.repository.update(cardId, dataToUpdate);

        if (!updatedCard) {
            return { status: 400, message: "Erro ao atualizar tabela!" };
        }

        return { status: 200, message: "Atualizado com sucesso!" };
    }
}