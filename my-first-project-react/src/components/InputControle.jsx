import { useState } from 'react';

function InputControle() {
    const [name, setName] = useState('');
    // recuperer dans le paragraphe le nom tapé par l'utilisateur dans l'input
    return (
        <div>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
            <p>Bonjour {name}</p>
        </div>
    );
}
export default InputControle;
