import { NextFunction, Request, Response } from "express";
import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import UserService from "../services/UserService";
import { TypeormUserRepository } from "../repositories/implementations/typeorm/Typeorm-user-repository";

export class UserController {
    private userRepository: IUserRepository;
    private userService: UserService;

    constructor() {
        this.userRepository = new TypeormUserRepository();
        this.userService = new UserService(this.userRepository);
    }

    async insert(req: Request, res: Response) {
        const result = await this.userService.insert(req.body);
        return res.status(result.status).json({ message: result.message });
    }

    async selectAll(req: Request, res: Response) {
        const result = await this.userService.selectAll();
        return res.status(result.status).json({ message: result.message, users: result.users });
    }
};