import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";

@Entity({ name: "debit_purchase" })
export class DebitPurchase {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string;

    @Column()
    amount!: number;

    @Column({ type: "date" })
    date!: string;

    @ManyToOne(() => Card, (card) => card.debit_purchases)
    @JoinColumn({ name: "card_id_fk" })
    card!: Card;
};