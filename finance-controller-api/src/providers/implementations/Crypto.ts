import { pbkdf2Sync } from "crypto";
import { ICrypto } from "../ICrypto";
import { config } from "dotenv";
config();

export class Crypto implements ICrypto {

    encrypt(password: string) {
        const hash = pbkdf2Sync(password, 'salt' + process.env.PRIVATE_KEY, 1000, 64, 'sha512').toString('hex');
        return { hash };
    }

    verify(passwordToCheck: string, password: string) {
        const hashToVerifiy = pbkdf2Sync(passwordToCheck, 'salt' + process.env.PRIVATE_KEY, 1000, 64, 'sha512').toString('hex');
        return hashToVerifiy == password;
    }

}