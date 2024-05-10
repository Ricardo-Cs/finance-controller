import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PurchaseCategory {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;
}