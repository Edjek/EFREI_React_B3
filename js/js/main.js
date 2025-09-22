'use strict';

/* ============================
   1) Variables & bonnes pratiques
   ============================ */

// Mauvaise pratique : var, noms vagues, types mélangés, réaffectations inutiles
// var mauvaisePratique = 'test';

// Bonnes pratiques :
// - Utiliser `const` par défaut, `let` si réaffectation nécessaire
// - Noms explicites, en camelCase

const sampleNumber = 12;
const sampleText = 'ma valeur';
const isEnabled = true; // booléen explicite
const isDisabled = false;

// ⚠️ Exemple de coercition implicite (à éviter en prod) :
console.log(12 + '45'); // "1245" (concaténation string + number)

/* ============================
   2) Array
   ============================ */

const animals = ['loup', 'renard', 'hibou'];

/* ============================
   3) Objet avec structure claire
   ============================ */

const character = {
    name: 'Son Goku',
    powerLevel: 123,
    abilities: ['vol', 'régénération'],
    children: {
        first: {
            name: 'Son Gohan',
            age: 23,
        },
        second: {
            name: 'Son Goten',
            age: 5,
            abilities: ['vol', 'régénération'],
        },
    },
    // Méthode (syntaxe concise ES2015)
    kamehameha() {
        console.log('Kamehameha !');
    },
};

// Exemples d'accès sûrs et lisibles
console.log(character.name);
console.log(character.abilities[1]);
console.log(character.children.second.abilities[0]);
// character.kamehameha();

/* =========================================
   4) Exercice : Marrakech vs Agadir (population)
   -----------------------------------------
   Énoncé :
   - Marrakech : 1 000 000 habitants, +50 000 / an (croissance linéaire)
   - Agadir :   500 000 habitants, +8% / an (croissance exponentielle)
   Objectif : dans combien d'années Agadir dépasse Marrakech ?
   ========================================= */

let popMarrakech = 1000000;
let popAgadir = 500000;
let years = 0;

while (popAgadir < popMarrakech) {
    popAgadir = popAgadir * 1.08;
    popMarrakech += 50000;

    years++;
}

console.log(popAgadir < popMarrakech);

/* =========================================
   5) DOM : au clic, afficher la famille Simpson
   -----------------------------------------
   Je veux que quand on appuye sur le bouton, en javascript cela cree une liste affichant les personnage de la famille Simpson
   ========================================= */
