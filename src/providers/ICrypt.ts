export interface ICryptResponse {
    hash: string
};

export interface ICrypt {
    encrypt(password: string): ICryptResponse;
    verify(passwordToCheck: string, password: string): boolean;
};