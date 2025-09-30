function MovieCard({ movie }) {
    return (
        <div>
            <img src={`./src/assets/img/${movie.path}`} alt={movie.title} />
            <button></button>
            <div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCard;
