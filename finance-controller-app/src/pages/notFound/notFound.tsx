import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h2>Página não encontrada</h2>
            <span onClick={() => navigate('/')} className="backToHome">Voltar para home</span>
        </div>
    );
}

export default NotFound;