import { useState } from 'react';

function Compteur() {
    let [value, setValue] = useState(1);

    return (
        <>
        <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            onClick={() => setValue(value +1)}
        >up</button>
        <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
            onClick={() => setValue(value -1)}
        >down</button>

        <p>{value}</p>
        </>
    );
}

export default Compteur;
