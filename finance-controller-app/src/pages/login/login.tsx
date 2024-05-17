import { useEffect, useState } from "react";
import loginUser from "../../api/loginUser";
import { useNavigate } from "react-router-dom";
import popUp from "../../components/popup/popUp";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const response = await loginUser({ email, password });

            if (!response || response.status !== 200) {
                console.error('Login failed:');
                return;
            }

            localStorage.setItem('token', response.token);
            navigate('/');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <form className="login" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="password">Senha</label>
                <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button>Enviar</button>
        </form>
    );
}

export default Login;
