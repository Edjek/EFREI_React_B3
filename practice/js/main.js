/*
    Description: Algorithmique Practice
    Language: JavaScript
    By: @edjek
    Lisez les instructions ci-dessous et écrivez votre code dans le fichier main.js
    Vous pouvez tester votre code en ouvrant le fichier index.html dans votre navigateur
    Vous pouvez voir les résultats de votre code dans la console de votre navigateur
*/

/*
        ._________________.
        | _______________ |
        | I             I |
        | I javascript  I |
        | I    Algo     I |
        | I             I |
        | I_____________I |
        |_________________|
            ._[_______]_.
        .___|___________|___.
        |::: ____           |
        |    ~~~~ [CD-ROM]  |
        |___________________|

 */

// ---------------------------------- Partie ----------------------------------

// Creer une variable qui contient votre prenom
// Afficher la console le message suivant avec la variable qui contient votre prenom
// 'Bonjour, je m'appelle XXXX'

// Afficher le message avec les 3 facons de faire une concaténation ('', "", ``)
const firstname = 'rachid';

console.log("Bonjour, je m'appelle" + 'rachid'.toUpperCase());
console.log("Bonjour, je m'appelle" + 'rachid'.toUpperCase());
console.log(`Bonjour, je m'appelle ${firstname}`);

// ---------------------------------- Partie ----------------------------------

// Creer un objet voiture
//     marque => renault
//     modele => clio
//     couleur => rouge
//     nombre de portes => 5
//     nombre de vitesses => 5
//     liste des options => (array) => climatisation, vitres electriques, gps, bluetooth, siege chauffant
//     decrire => () => "La voiture est une renault clio rouge de 5 portes et 5 vitesses"
//     decrireOptions => () => "La voiture est équipée de la climatisation, des vitres electriques, du gps, du bluetooth et des sieges chauffants"

const car = {
    marque: 'renault',
    modele: 'clio',
    couleur: 'rouge',
    nbPOrtes: 5,
    nbVitesse: 5,
    listOptions: ['climatisation', 'vitres electriques', 'gps', 'bluetooth', 'siege chauffant'],
    describe: function () {
        return `La voiture est une ${this.marque} rouge de 5 portes et 5 vitesses`;
    },
    decrireOptions: function () {
        return 'La voiture est une renault clio rouge de 5 portes et 5 vitesses';
    },
};

// Afficher dans la console la marque de la voiture
console.log(car.marque);
// Afficher dans la console le modele de la voiture
console.log(car.modele);
// Afficher dans la console la couleur de la voiture
console.log(car.couleur);

// Afficher dans la console 'La voiture est une renault clio rouge de 5 portes et 5 vitesses'
console.log(car.describe());

// Afficher dans la console la liste des options de la voiture
console.log(car.listOptions.join(', '));

// A l'aide d'une boucle for(), afficher dans la console la liste des options de la voiture
for (let i = 0; i < car.listOptions.length; i++) {
    console.log(car.listOptions[i]);
}

// A l'aide d'une boucle forEach(), afficher dans la console la liste des options de la voiture
car.listOptions.forEach((option) => {
    console.log(option);
});

// A l'aide d'une boucle for(...of...), afficher dans la console la liste des options de la voiture
for (const option of car.listOptions) {
    console.log(option);
}

// Afficher dans la console 'La voiture est équipée de la climatisation, des vitres electriques, du gps, du bluetooth et des sieges chauffants'

// Demander à l'utilisateur de saisir son prénom
// Demander à l'utilisateur de saisir son nom
// Demander à l'utilisateur de saisir son age
// Demander à l'utilisateur de saisir son sexe
// Demander à l'utilisateur de saisir son animal préféré
// const name = window.prompt('Donne ton nom')

// Créer un objet utilisateur
//     prenom => prenom de l'utilisateur
//     nom => nom de l'utilisateur
//     age => age de l'utilisateur
//     sexe => sexe de l'utilisateur
//     animalPrefere => animal préféré de l'utilisateur
//     description => () => "Je m'appelle XXXX et j'ai XXXX ans et j'aime les XXXXX"

// Afficher dans la console la description de l'utilisateur

// Voici un tableau qui contient 6 objets utilisateurs
let users = [
    {
        prenom: 'Alice',
        nom: 'Dupont',
        age: 28,
        sexe: 'Femme',
        animauxPreferes: ['chat', 'chien'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'Bob',
        nom: 'Martin',
        age: 35,
        sexe: 'Homme',
        animauxPreferes: ['poisson', 'oiseau'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'Claire',
        nom: 'Rousseau',
        age: 42,
        sexe: 'Femme',
        animauxPreferes: ['cheval', 'lapin'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'David',
        nom: 'Lefebvre',
        age: 22,
        sexe: 'Homme',
        animauxPreferes: ['chat', 'chien'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'Emma',
        nom: 'Garcia',
        age: 29,
        sexe: 'Femme',
        animauxPreferes: ['chien', 'hamster'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
    {
        prenom: 'François',
        nom: 'Moreau',
        age: 46,
        sexe: 'Homme',
        animauxPreferes: ['chat', 'oiseau'],
        description: function () {
            return `Je m'appelle ${this.prenom} ${this.nom} et j'ai ${
                this.age
            } ans et j'aime les ${this.animauxPreferes.join(', ')}.`;
        },
    },
];

// Faire une boucle sur le tableau users
// Afficher dans la console la description de chaque utilisateur
// Utiliser la méthode for()

// Utiliser la méthode forEach()
users.forEach((x) => {
    console.log(x.description());
});

// Utiliser la méthode for(...of...)

// Choisissez la méthode qui vous semble la plus adaptée pour itérer sur le tableau users
// Boucler sur chaque utilisateur pour afficher toutes les informations de l'utilisateur

// ---------------------------------- Partie ----------------------------------

const students = [
    {
        nom: 'Dupont',
        prenom: 'Alice',
        cours: ['Maths', 'Anglais', 'Histoire'],
        notes: [14, 16, 18],
    },
    {
        nom: 'Martin',
        prenom: 'Bob',
        cours: ['Physique', 'Espagnol', 'Géographie'],
        notes: [12, 13, 15],
    },
    {
        nom: 'Lefebvre',
        prenom: 'Claire',
        cours: ['Chimie', 'Allemand', 'SVT'],
        notes: [9, 10, 11],
    },
    {
        nom: 'Girard',
        prenom: 'David',
        cours: ['Français', 'Arts plastiques', 'Philosophie'],
        notes: [17, 19, 14],
    },
    {
        nom: 'Petit',
        prenom: 'Emma',
        cours: ['Latin', 'Musique', 'Sciences économiques'],
        notes: [16, 11, 12],
    },
    {
        nom: 'Moreau',
        prenom: 'François',
        cours: ['Sport', 'Théâtre', 'Informatique'],
        notes: [11, 13, 15],
    },
    {
        nom: 'Dubois',
        prenom: 'Marc',
        cours: ['Géométrie', 'Latin', 'Marketing'],
        notes: [15, 12, 10],
    },
    {
        nom: 'Garcia',
        prenom: 'Hugo',
        cours: ['Littérature', 'Musique', 'Droit'],
        notes: [14, 17, 18],
    },
    {
        nom: 'Roux',
        prenom: 'Inès',
        cours: ['Sociologie', 'Japonais', 'Chimie'],
        notes: [10, 9, 12],
    },
    {
        nom: 'Berger',
        prenom: 'Jules',
        cours: ['Géographie', 'Théâtre', 'Espagnol'],
        notes: [13, 16, 14],
    },
    {
        nom: 'Moulin',
        prenom: 'Karine',
        cours: ["Histoire de l'art", 'Anglais', 'Physique'],
        notes: [17, 15, 18],
    },
    {
        nom: 'David',
        prenom: 'Lucie',
        cours: ['Chinois', 'Marketing', 'SVT'],
        notes: [12, 11, 9],
    },
    {
        nom: 'Mercier',
        prenom: 'Marc',
        cours: ['Philosophie', 'Sport', 'Français'],
        notes: [18, 13, 16],
    },
    {
        nom: 'Fournier',
        prenom: 'Nina',
        cours: ['Informatique', 'Littérature', 'Musique'],
        notes: [15, 14, 17],
    },
    {
        nom: 'Morel',
        prenom: 'Olivier',
        cours: ['Espagnol', 'Chimie', 'Théâtre'],
        notes: [13, 11, 16],
    },
];

// Itérer sur le tableau students avec la méthode forEach()

// 1. Afficher dans la console le nom et le prénom de chaque élève

// 2. Afficher dans la console le nom et le prénom de chaque élève qui sont inscrits au cours de "Français" ou "Maths"
students.forEach((student) => {
    if (student.cours.includes('Français') || student.cours.includes('Maths')) {
        console.log(student.nom);
    }
});

// au lieu d'utiliser directement includes les tableaux ont une methode some() utilisez là

students.forEach((student) => {
    if (
        student.cours.some((c) => {
            ['Français', 'Maths'].includes(c);
        })
    ) {
        console.log(student.nom);
    }
});

// 3. Afficher dans la console le nom et le prénom de chaque élève qui ont ete reçus

// 4. Afficher dans la console le nom et la moyenne de chaque élève

// 5. Afficher dans la console le nom et la moyenne de chaque élève
// si la moyenne est supérieure ou égale à 15
// Afficher dans la console 'vous obtenez une bourse'
// Si la moyenne estsupérieure ou égale à 10
// Afficher dans la console 'vous avez votre diplôme'
// Si en dessous de 10 et au dessus de 9
// Afficher dans la console 'vous allez en rattrapage'
// Si la moyenne est inférieure à 9
// Afficher dans la console 'vous redoublez'
