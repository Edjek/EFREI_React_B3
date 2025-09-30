import Button from '../components/Button.jsx';
import Card from '../components/Card.jsx';
import Compteur from '../components/Compteur.jsx';
import InputControle from '../components/InputControle.jsx';
import Panier from '../components/Panier.jsx';
import pokemons from '../data/pokemons.js';

function Home() {
    return (
        <main>
            <Panier/>
            <InputControle />
            <Compteur />
            {pokemons.map((pokemon, index) => (
                <Card caracter={pokemon.name} key={index}>
                    <p>{pokemon.description}</p>
                </Card>
            ))}

            <Button
                class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
                pull='dedrfe'
            >
                Valider
            </Button>
            <Button class='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded'>
                Annuler
            </Button>
        </main>
    );
}

export default Home;
