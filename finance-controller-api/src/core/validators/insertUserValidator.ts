import { body } from "express-validator";

export const insertUserValidator = [
    body('full_name', 'O nome não pode ser vazio!').notEmpty(),
    body('email', 'O email não pode ser vazio!').notEmpty()
        .if(body('email').notEmpty())  // Aplica a validação do formato apenas se o campo não estiver vazio.
        .isEmail().withMessage('Formato do email inválido!'),
    body('password', 'A senha não pode ser vazia').notEmpty()
        .if(body('password').notEmpty())
        .isLength({ min: 8, max: 128 }).withMessage('A senha deve ter entre 8 e 128 caracteres!'),
];