import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from "./Invoice";
import { PurchaseCategory } from "./PurchaseCategory";
import { User } from "./User";

@Entity({ name: "credit_purchase" })
export class CreditPurchase {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string;

    @Column()
    amount!: number;

    @Column({ type: "date" })
    date!: Date;

    @ManyToOne(() => Invoice, (invoice) => invoice.purchases)
    @JoinColumn({ name: "invoice_id_fk" })
    invoice!: Invoice;

    @ManyToMany(() => PurchaseCategory)
    @JoinTable()
    categories!: PurchaseCategory[];

    @ManyToOne(() => User, (user) => user.credit_purchases)
    @JoinColumn({ name: "user_id_fk" })
    user!: User;
};