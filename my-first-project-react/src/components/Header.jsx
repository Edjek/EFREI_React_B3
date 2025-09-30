import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to='/'>Notre Site</Link>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
