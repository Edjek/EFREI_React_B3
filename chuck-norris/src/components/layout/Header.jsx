import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <Link
                to='/'
                className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'
            >
                🥋 Chuck Norris Jokes
            </Link>
            <nav>
                <Link to='/'>Accueil</Link>
                <Link to='/favoris'>Favoris</Link>
            </nav>
        </header>
    );
};

export default Header;
