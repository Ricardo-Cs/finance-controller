export interface IJWT {
    createToken(payload: any, expiresIn: string): Promise<string>;
    verify(token: string): Promise<unknown>;
}