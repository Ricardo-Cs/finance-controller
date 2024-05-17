import { apiUrl } from "../utils/apiUrl";

export interface createUserData {
    full_name: string,
    email: string,
    password: string
};

const handleCreateUser = async (data: createUserData) => {
    const response = await apiUrl.post('/user', {
        full_name: data.full_name,
        email: data.email,
        password: data.password
    });

    return { status: response.status, message: response.data.message };
};

export default handleCreateUser;