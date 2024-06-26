import { apiUrl } from "../utils/apiUrl";

async function getUserData(token: string) {
    return await apiUrl.get('/user/data', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return { status: response.status, user: response.data.user, error: response.data.error };
        })
        .catch(function (error) {
            console.error('Request error:', error);
            console.log(error)
        });
}

export default getUserData;