import { Request, Response } from "express";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import UserService from "../services/UserService";
import { TypeormUserRepository } from "../repositories/implementations/typeorm/Typeorm-user-repository";
import { ICrypto } from "../providers/ICrypto";
import { Crypto } from "../providers/implementations/Crypto";
import { IJWT } from "../providers/IJWT";
import { JWT } from "../providers/implementations/JWT";

export class UserController {
    private userRepository: IUserRepository;
    private userService: UserService;
    private crypto: ICrypto;
    private jwt: IJWT;

    constructor() {
        this.userRepository = new TypeormUserRepository();
        this.crypto = new Crypto();
        this.jwt = new JWT();
        this.userService = new UserService(this.userRepository, this.crypto, this.jwt);
    }

    async insert(req: Request, res: Response) {
        const result = await this.userService.insert(req.body);
        return res.status(result.status).json({ message: result.message });
    }

    async selectAll(req: Request, res: Response) {
        const result = await this.userService.selectAll();
        return res.status(result.status).json({ message: result.message, users: result.users });
    }

    async login(req: Request, res: Response) {
        const result = await this.userService.login(req.body);
        return res.status(result.status).json({ message: result.message, token: result.token });
    }
};