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

    @Column()
    balance!: number;

    @Column()
    is_active!: boolean;

    @OneToMany(() => Card, (card) => card.user)
    cards!: Card[];
}