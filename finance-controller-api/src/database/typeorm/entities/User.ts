import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";
import { DebitPurchase } from "./DebitPurchase";
import { CreditPurchase } from "./CreditPurchase";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    full_name!: string;

    @Column({ unique: true })
    email!: string;

    @Column({ length: 128 })
    password!: string;

    @Column({ default: 0 })
    balance!: number;

    @OneToMany(() => Card, (card) => card.user)
    cards!: Card[];

    @OneToMany(() => DebitPurchase, (debitPurchase) => debitPurchase.user)
    debit_purchases!: DebitPurchase[];

    @OneToMany(() => CreditPurchase, (creditPurchase) => creditPurchase.user)
    credit_purchases!: CreditPurchase[];
}