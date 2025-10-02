import { useContext, useEffect, useState } from 'react';
import FavoritesKeyContext from '../contexts/FavoritesKeyContext';

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);
    const FAVORITES_KEY = useContext(FavoritesKeyContext);

    useEffect(() => {
        const data = localStorage.getItem(FAVORITES_KEY);
        if (data) {
            setFavorites(JSON.parse(data));
        }
    }, [FAVORITES_KEY]);

    const removeFavorite = (index) => {
        const newFavorites = favorites.filter((favorite, i) => i !== index);
        setFavorites(newFavorites);
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    };

    return (
        <main className='min-h-screen flex items-center justify-center bg-gray-100 p-6'>
            <div className='bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full'>
                {favorites.length === 0 ? (
                    <p className='mt-6 text-gray-500'>Aucun favori pour le moment.</p>
                ) : (
                    <ul className='mt-6 space-y-3'>
                        {favorites.map((fav, i) => (
                            <li
                                key={i}
                                className='group flex items-start gap-3 p-4 border rounded-xl bg-gray-50 hover:bg-white hover:shadow transition'
                            >
                                <span className='text-gray-700 text-sm leading-relaxed flex-1'>{fav}</span>
                                <button
                                    onClick={() => {
                                        removeFavorite(i);
                                    }}
                                    className='shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition text-sm'
                                    aria-label='Supprimer ce favori'
                                    title='Supprimer'
                                >
                                    ❌ <span className='hidden sm:inline'>Supprimer</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
};

export default Favorites;
