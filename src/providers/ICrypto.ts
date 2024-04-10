export interface ICryptResponse {
    hash: string
};

export interface ICrypto {
    encrypt(password: string): ICryptResponse;
    verify(passwordToCheck: string, password: string): boolean;
};