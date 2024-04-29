import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Invoice } from "./Invoice";
import { DebitPurchase } from "./DebitPurchase";

@Entity()
export class Card {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    limit!: string;

    @Column()
    balance!: number;

    @ManyToOne(() => User, (user) => user.cards)
    @JoinColumn({ name: "user_id_fk" })
    user!: User;

    @OneToMany(() => Invoice, (invoice) => invoice.card)
    invoices!: Invoice[];

    @OneToMany(() => DebitPurchase, (debit_purchase) => debit_purchase.card)
    debit_purchases!: DebitPurchase[];
}