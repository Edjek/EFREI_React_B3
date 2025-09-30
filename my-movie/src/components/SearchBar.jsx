function SearchBar({ value, onSearch }) {
    const handleChange = (e) => {
        onSearch(e.target.value);
    };

    return (
        <form>
            <input type='text' value={value} onChange={handleChange} />
            <button type='submit'>Rechercher</button>
        </form>
    );
}

export default SearchBar;
