import MovieCard from '../components/MovieCard';
import movies from '../data/movies';
import SearchBar from '../components/SearchBar';
import { useState } from 'react';

function Home() {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (searchValue) => {
        setSearchValue(searchValue);
    };

    return (
        <section>
            <h1>Accueil</h1>

            <SearchBar value={searchValue} onSearch={handleSearch} />

            {movies.map(
                (movie, index) =>
                    movie.title.toLowerCase().includes(searchValue.toLowerCase()) && (
                        <MovieCard movie={movie} key={index} />
                    )
            )}
        </section>
    );
}

export default Home;
