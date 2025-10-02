import { useContext, useEffect, useState } from 'react';
import FavoritesKeyContext from '../contexts/FavoritesKeyContext';

const Home = () => {
    const FAVORITES_KEY = useContext(FavoritesKeyContext);
    const [joke, setJoke] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [favorites, setFavorites] = useState([]);

    const loadJoke = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await fetch('https://api.chucknorris.io/jokes/random');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            const data = await res.json();
            setJoke(data.value);
        } catch {
            setError('Impossible de récupérer une joke');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const data = localStorage.getItem(FAVORITES_KEY);
        if (data) {
            setFavorites(JSON.parse(data));
        }
        loadJoke();
    }, []);

    const addToFavorites = () => {
        if (!joke) return;
        if (favorites.includes(joke)) return;

        const newFavorites = [...favorites, joke];
        setFavorites(newFavorites);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    };

    return (
        <main className='min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
            <div className='bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center space-y-6'>
                <h1 className='text-2xl font-bold text-gray-800'>Joke de Chuck Norris</h1>

                {loading && <p className='text-gray-500'>Chargement…</p>}
                {error && <p className='text-red-600'>Erreur : {error}</p>}
                {!loading && !error && <p className='text-lg text-gray-700 italic'>“{joke}”</p>}

                <button
                    onClick={loadJoke}
                    className='px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition'
                >
                    Nouvelle blague
                </button>
                <button onClick={addToFavorites}>Ajouter aux favoris</button>
            </div>
        </main>
    );
};

export default Home;
