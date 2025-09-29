import Button from '../components/Button';
import Card from '../components/Card';

function Home() {
    return (
        <main>
            
            {/* <Card caracter='pikachu'>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, voluptatum! Neque, ullam ab velit
                    rerum corrupti tenetur quasi necessitatibus, quibusdam facilis odit sunt excepturi ad officiis a
                    magni asperiores nesciunt
                </p>
            </Card> */}

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
