import { apiUrl } from "../utils/apiUrl";

export interface loginData {
    email: string,
    password: string
}

async function loginUser(data: loginData) {
    return await apiUrl.post('/user/login', {
        email: data.email,
        password: data.password
    })
        .then(response => {
            return { status: response.status, token: response.data.token };
        })
        .catch(function (error) {
            console.error('Login error:', error);
            console.log(error)
        });
}

export default loginUser;