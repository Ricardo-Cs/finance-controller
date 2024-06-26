import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CreditPurchase } from "./CreditPurchase";
import { Card } from "./Card";

@Entity()
export class Invoice {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    closing_date!: string;

    @Column()
    due_date!: string;

    @Column()
    total_amount!: number;

    @ManyToOne(() => Card, (card) => card.invoices)
    @JoinColumn({ name: "card_id_fk" })
    card!: Card;

    @OneToMany(() => CreditPurchase, (credit_purchase) => credit_purchase.invoice)
    purchases!: CreditPurchase[];
};