import { AfterUpdate, EntitySubscriberInterface, EventSubscriber, UpdateEvent } from "typeorm";
import { Card } from "../entities/Card";
import { User } from "../entities/User";

@EventSubscriber()
export class CardSubscriber implements EntitySubscriberInterface<Card> {
    listenTo(): string | Function {
        return Card;
    }

    // Update User balance after card balance was update
    async afterUpdate(event: UpdateEvent<Card>) {
        const updatedCard: any = event.entity;
        const userRepository = event.connection.getRepository(User);
        const cardRepository = event.connection.getRepository(Card);

        const user = await userRepository.findOneBy({ cards: { id: updatedCard.id } });

        if (!user) {
            return;
        }

        let cards = await cardRepository.find({
            where: {
                user: { id: user.id }
            }
        });

        const notUpdatedUser = cards.find((card) => card.id === updatedCard.id) as Card;

        const updatedCards = cards.map((card) => {
            if (card.id === notUpdatedUser.id) {
                return { ...card, balance: updatedCard.balance };
            }
            return card;
        });

        cards = updatedCards;

        const totalBalance = cards.reduce((sum, card) => sum + card.balance, 0);
        await userRepository.update(user.id, { balance: totalBalance });
    }
}