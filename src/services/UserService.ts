import { ILoginDTO } from "../core/DTO/LoginDTO";
import { User } from "../database/typeorm/entities/User";
import { ICrypto } from "../providers/ICrypto";
import { IJWT } from "../providers/IJWT";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";

export default class UserService {
    private repository: IUserRepository;
    private crypto: ICrypto;
    private jwt: IJWT;

    constructor(repository: IUserRepository, crypto: ICrypto, jwt: IJWT) {
        this.repository = repository;
        this.crypto = crypto;
        this.jwt = jwt;
    }

    async insert(user: User) {
        const userExists = await this.repository.selectByEmail(user.email);

        if (userExists) {
            return { status: 400, message: "Usuário já existe!" };
        }

        const encrypted = this.crypto.encrypt(user.password);
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

    async login(loginData: ILoginDTO) {
        const userExists = await this.repository.selectByEmail(loginData.email);

        if (!userExists) {
            return { status: 400, message: "E-mail ou senha incorretos." };
        }

        const passwordCheck = this.crypto.verify(loginData.password, userExists.password);

        if (!passwordCheck) {
            return { status: 400, message: "E-mail ou senha incorretos." };
        }

        const token = await this.jwt.createToken({ id: userExists.id, full_name: userExists.full_name }, '1h');

        return { status: 200, token: token };
    }
}