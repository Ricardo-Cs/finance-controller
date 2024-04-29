import { Repository } from "typeorm";
import { User } from "../../../database/typeorm/entities/User";
import { IUserRepository } from "../../interfaces/IUserRepository";
import { AppDataSource } from "../../../database/typeorm/data-source";

export class TypeormUserRepository implements IUserRepository {
    private typeorm: Repository<User>;

    constructor() {
        this.typeorm = AppDataSource.getRepository(User);
    }

    async insert(user: User) {
        return await this.typeorm.save(user);
    }

    async selectAll() {
        return await this.typeorm.find();
    }

    async selectByEmail(email: string) {
        return await this.typeorm.findOne({
            where: {
                email: email
            }
        });
    }

    async delete(id: number) {
        await this.typeorm.delete({ id: id });
        return;
    }
}