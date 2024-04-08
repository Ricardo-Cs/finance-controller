import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    is_active!: boolean;
}