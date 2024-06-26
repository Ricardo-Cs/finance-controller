import { User } from "../../database/typeorm/entities/User";

export interface IUserRepository {
    insert(user: User): Promise<User>;
    selectAll(): Promise<User[]>;
    selectByEmail(email: string): Promise<User | null>;
    selectById(id: number): Promise<User | null>;
    delete(id: number): Promise<void>;
};