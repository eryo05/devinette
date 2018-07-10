/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var test = 0;

for (var i = 0; i < 5; i++){

var nombre = prompt("Entrez un nombre  " + (6 - i) + " essai restant");

if (solution == nombre){
    alert("Good");
}
else if (solution < nombre){
    alert("Trop grand");
}
else if (solution > nombre){
    alert("Trop petit");
}

}
