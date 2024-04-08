import { User } from "../database/typeorm/entities/User";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export default class UserService {
    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    async insert(user: User) {
        const insertUser = await this.repository.insert(user);

        if (!insertUser) {
            return { status: 400, message: "Usuário não foi criado!." };
        };

        return { status: 201, message: "" };
    }
}