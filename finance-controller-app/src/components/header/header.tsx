import { Link } from 'react-router-dom';
import './header.css';
import { Logo } from '../logo/logo';

function Header() {
    return (
        <header>
            <div className="headerContainer">
                <div className="headerLeft">
                    <Logo />
                </div>
                <div className="headerRight">
                    <Link to={'/a'} className="button">Cadastrar</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;