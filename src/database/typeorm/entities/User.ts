import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Card } from "./Card";

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
}