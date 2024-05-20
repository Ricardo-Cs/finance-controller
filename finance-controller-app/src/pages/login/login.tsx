import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Login() {
    const { signIn }: any = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const res = await signIn({ email: email, password: password });

        if (res) {
            console.log(res);
            return;
        }

        navigate("/");
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