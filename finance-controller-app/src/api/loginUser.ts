import { apiUrl } from "../utils/apiUrl";

export interface loginData {
    email: string,
    password: string
}

async function loginUser(data: loginData) {
    const response = await apiUrl.post('/user/login', {
        email: data.email,
        password: data.password
    });

    return { status: response.status, token: response.data.token };
}

export default loginUser;