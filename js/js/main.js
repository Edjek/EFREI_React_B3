var mauvaisePratique = 'test';
// ES6
let test;
let number = 12;
let text = 'ma valeur';
let boolean = true;
let boolean2 = false;
boolean = null;
 console.log( 12 + '45' );

let animals = ['loup', 12, [['TRefytf']]];

let personnage = {
    name: 'san goku',
    puissance: 123,
    capacite: ['vol', 'regeneration'],
    enfant: {
        firstChild: {
            name: 'san Gohan',
            age: 23,
        },
        secondChild: {
            name: 'San Goten',
            age: 5,
            capacite: ['vol', 'regeneration'],
        },
    },
    kamehama: function () {
        console.log('tu es mort!');
    },
};

console.log(personnage.name);
console.log(personnage.capacite[1]);
console.log(personnage.enfant.secondChild.capacite[0]);

console.log();

/*
    La population de la ville Marrakech est de 1, 000, 000 d’habitants et elle augmente de 50, 000 habitants par an.
    Celle de la ville Agadir est de 500, 000 habitants et elle augmente de 8% par an.
    Ecrire un algorithme permettant de déterminer dans combien d’années la population de la ville Agadir dépassera celle de la ville Marrakech.
*/