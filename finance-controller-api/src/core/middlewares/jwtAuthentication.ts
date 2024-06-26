const jwt = require('jsonwebtoken');

const authMiddleware = async (req: any, res: any, next: any) => {
    const authHeader: any = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ 'error': 'Token de autenticação inválido' });
    }

    const path = authHeader.split(' ');

    if (path.length != 2) {
        return res.status(401).json({ 'error': 'Token em um formato inválido' });
    }

    const [scheme, token] = path;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ 'error': 'Token em um formato inválido' });
    }

    await jwt.verify(token, process.env.PRIVATE_KEY_TOKEN ? process.env.PRIVATE_KEY_TOKEN : '123456' as string, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({ 'error': 'Token inválido' });
        }

        if (!decoded) {
            return res.status(401).json({ 'error': 'Erro na validação' });
        }

        req.id = decoded.id as string;
        req.full_name = decoded.full_name as string;
        return next();
    });
};

export default authMiddleware;