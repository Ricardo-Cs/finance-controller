interface IAddress {
    email: string,
    password: string
};

export interface IMessage {
    to: IAddress,
    from: IAddress,
    subject: string,
    body: string
};

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>;
};