import { useNavigate } from 'react-router-dom';
import './logo.css';

export const Logo = () => {
    const navigate = useNavigate();

    return (
        <div className="logo" onClick={() => navigate('/')}>
            <div className="mainLogo">Finance Controller</div>
        </div>
    );
}