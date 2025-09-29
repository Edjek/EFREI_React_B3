function Card({ caracter, children }) {
    return (
        <div className='w-[250px] border-2 p-2'>
            <img src={`./src/assets/img/${caracter}.png`} alt={caracter} />
            <h3>{caracter}</h3>
            {children}
        </div>
    );
}

export default Card;
