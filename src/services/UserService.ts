import { User } from "../database/typeorm/entities/User";
import { Crypto } from "../providers/implementations/Crypto";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export default class UserService {
    private repository: IUserRepository;

    constructor(repository: IUserRepository) {
        this.repository = repository;
    }

    async insert(user: User) {
        const userExists = await this.repository.selectByEmail(user.email);

        if (userExists) {
            return { status: 400, message: "Usuário já existe!" };
        }

        const encrypted = new Crypto().encrypt(user.password);
        user.password = encrypted.hash;
        const insertUser: User = await this.repository.insert(user);

        if (!insertUser) {
            return { status: 400, message: "Usuário não foi criado!." };
        };

        return { status: 201, message: "Usuário criado!" };
    }

    async selectAll() {
        const users: User[] = await this.repository.selectAll();

        if (!users) {
            return { status: 400, message: "Sem usuários encontrados!", users: {} };
        }

        return { status: 200, users: users };
    }
}