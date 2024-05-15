import { api } from "../utils/api";

export interface createUserData {
    full_name: string,
    email: string,
    password: string
};

const handleCreateUser = async (data: createUserData) => {
    const response = await api.post('/user', {
        full_name: data.full_name,
        email: data.email,
        password: data.password
    });

    console.log({ status: response.status, message: response.data.message });
};

export default handleCreateUser;