import { Card } from "../../database/typeorm/entities/Card";

export interface ICardRepository {
    insert(card: Card): Promise<Card>;
    selectByUserId(userId: number): Promise<Card[] | null>;
    update(cardId: number, dataToUpdate: any): Promise<Number | undefined>;
} 