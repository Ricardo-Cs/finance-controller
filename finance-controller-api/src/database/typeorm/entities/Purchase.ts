import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Invoice } from "./Invoice";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string;

    @Column()
    amount!: number;

    @ManyToOne(() => Invoice, (invoice) => invoice.purchases)
    @JoinColumn({ name: "invoice_id_fk" })
    invoice!: Invoice;
};