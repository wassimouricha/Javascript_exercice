
//exercice 1
var variableun = 1 ;
var variabledeux = 2 ;
var inversion ;

inversion = variableun ;
variableun =  variabledeux ;
variabledeux = inversion;

console.log( inversion);
console.log( variableun);


//exercice 2

const nom = 'toto'
const Age = '30'
const homme = 'true'

console.log(nom + ' à ' + Age + ' ans ' + ' et c est ' + homme);

//exercice 3

console.log(Math.pow(4, 2));

//exercice 4

function addition() {
    console.log(4 + 2)
};

addition()

//exercice 5



function conversion() {
    console.log(4 * 60),
    console.log(3 * 60)
};

conversion();

//exercice 6
console.log('---')

var x = 1
    x++;
 console.log(x);
    x--;
console.log(x);


//exercice 7

function triangle() {
    console.log((8 * 2) / 2),
    console.log((7 * 3) / 2)
};

triangle();

//exercice 8
let tab = [71 ,"test" ,355 ,24 ,"six" ,"mehdi"];
let spl = tab[2];

console.log(spl)

//exercice 9

let b = 10;
let f = 200;
sum = b + f;

function comparaison() {
    if (sum < 100) {
    return "C'est inférieur";
    } else {
    return "C'est supérieur";
    }
};
console.log(comparaison());

//exercice 12

let heure = 1;
let heureu = 5

function convertus(x) {
    return x * 3600
    ;
};


console.log(convertus(heure));
console.log(convertus(heureu));

//exercie 13


som = -1;

function comparus() {
    if (som <= 0) {
    return "true";
    } else {
    return "false";
    }
};
console.log(comparus());


//exercice 14


function isEqual(x,y) {
    if  (x===y){
        //=== verfications booléens
    return true;
    } else {
    return false;
    }
};
console.log(isEqual(3,6));
console.log(isEqual(1,'1'));
console.log(isEqual(1,1));


//exercice 15

function divis(x) {
    if  (x % 5 == 0){
        
    return true;
    } else {
    return false;
    }
};
console.log(divis(3));
console.log(divis(10));
console.log(divis(1));

//exercice 16

function entier(h,m){
    return h * 3600 + m * 60 ;
}

console.log(entier(30,25));

//exercice 17

function  inverserTableau (tableau) {
    let nouveauTab =[];
    tableau.forEach(valeur => 
    {
        nouveauTab.unshift(valeur);
    })
    return nouveauTab;
}

console.log(inverserTableau([1,2,3,5]));

//exercice 18

function renvoieDernier2 (tab){
    return tab[tab.length-1];
 }
 console.log(renvoieDernier2([1,2,3,4,5,55]));

 //exercice 19

 function vérifierEgalité (x,y){
    if (x===y){
        console.log("true");
    }

    else {
        console.log("false");
    }
}

vérifierEgalité (2,2);

//exercice 20

function chainus (chain){
    if (chain==''){
    console.log('true');
    }
    else
    console.log('false');
}

chainus ('');