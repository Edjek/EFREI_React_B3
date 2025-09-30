import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to='/'>Accueil</Link>
            <Link to='/favori'>Favoris</Link>
        </nav>
    );
}

export default Navbar;
