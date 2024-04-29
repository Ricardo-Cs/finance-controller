import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from "./Invoice";

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
};