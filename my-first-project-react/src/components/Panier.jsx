import { useState } from 'react';

function Panier() {
    const produits = [
        { id: 1, nom: 'Pomme 🍎' },
        { id: 2, nom: 'Banane 🍌' },
        { id: 3, nom: 'Orange 🍊' },
    ];
    const [cartCount, setcartCount] = useState(0);

    return (
        <>
        <a href="fd">fdfz</a>
            <h2>Mon panier</h2>
            <p>Nombre total d'article du panier : {cartCount}</p>
            <button onClick={() => setcartCount(0)}>Reset</button>
            <ul>
                {produits.map((produit) => (
                    <li>
                        {produit.nom} <button onClick={() => setcartCount(cartCount + 1)}>Ajouter au panier</button>
                    </li>
                ))}
            </ul>
            ;
        </>
    );
}

export default Panier;
