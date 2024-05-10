import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";
import { PurchaseCategory } from "./PurchaseCategory";
import { User } from "./User";

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

    @ManyToOne(() => User, (user) => user.debit_purchases)
    @JoinColumn({ name: "user_id_fk" })
    user!: User;

    @ManyToMany(() => PurchaseCategory)
    @JoinTable()
    categories!: PurchaseCategory[];
};