export default function getUserToken() {
    const token = window.localStorage.getItem('token') as string;
    return token;
}