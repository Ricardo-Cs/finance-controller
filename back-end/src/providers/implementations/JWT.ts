import { IJWT } from '../IJWT';
const jwt = require('jsonwebtoken');
import { config } from 'dotenv';
config();

export class JWT implements IJWT {
    async createToken(payload: any, expiresIn: string) {
        const token = jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: expiresIn });
        return token;
    }

    verify(token: string) {
        try {
            const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            return decoded;
        } catch (err) {
            return false;
        }
    }
}