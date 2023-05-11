// var age= prompt("entrez votre âge");
// if(age < 18){
//     console.log("carte junior");
// }else if(age > 18){
//     console.log("carte adulte");
// }
/*var email1 ="test@gmail.com";
var mdp1 ="pistache123";

var email2 = prompt("entrez votre adresse mail");
var mdp2 = prompt("entrz vote mot de passe");

if(email1 != email2 && mdp1 != mdp2){
    console.log("accès refusé");
}
else if(email1 == email2 && mdp1 == mdp2){
  console.log("accès accepté");
}
for(let compter =0 ; compter <= 20 ; compter++){
    console.log(compter)
}
for(let compter1 = 20 ; compter1 >= 0 ; compter1--){
    console.log(compter1)
}
for(let compter2 = 0 ; compter2 <= 10 ; compter2 == compter2+2){
     console.log(compter2)
}
var somme = prompt("entrez votre sommes"){
}
if (somme > 50){
    console.log(somme= 0; somme < 5 ; somme == somme+50)
}*/

/*var mail = prompt("rentrez votre mail");
while(mail !="test@gmail.com"){
    console.log("mauvaise adresse mail");
    mail = prompt("rentrez mail");
}
console.log(mail);

var mail = prompt("rentrez votre mail")
var mdp = prompt("rentrez votre mot de passe");
while(mail !="test@gmail.com" && mdp !="abc123"){
    console.log("mauvais mdp ou mail");
    mail = prompt("rentrez votre mail");
    mdp= prompt("rentrez votre mdp");
}
console.log(mail && mdp);



function bjr(prenom){
    console.log("Bonjour " + prenom);
}
var prenom = prompt("entrez votre prénom");
bjr(prenom);

/*bonjour + le prénom + age + ville*/

/*function bjrpre(prenom1,age1,ville1){
    console.log("bonjour " + prenom1 + age1 + ville1);
}
var prenom1,age1,ville1 = prompt("entrez vos informations");
bjrpre(prenom1,age1,ville1);*/

/* une condition qui vérifie que si la personne habite bien a Amiens
ensuite demander a la personne nom prénom âge ville mail et mdp faut vérif mail et mdp et il faudra affiché prénom + age + ville + mail sinon message d'erreur
boucle qui affiche 15 fois le mot js
une fonction qui prend en param 2 chiffres et qui affichera la sommes des deux chiffres*/

/*var ville = "Amiens";
var villea = prompt("entrez votre ville");
if (ville != villea){
    console.log("refusé");
}
else if(ville == villea){
      console.log("accepté");
}
function ctrolong(ekip, sixsixsept, petasse, ldo, lms){
    console.log("bonjour" + ekip + " " + sixsixsept + petasse + ldo + lms);
}
var nom = prompt("entrez votre nom");
var prenom = prompt("entrez votre prénom");
var age = prompt("entrez votre age");
var ville = prompt("entrez votre ville");
var mail = prompt("entrez votre mail");
var informations = new Array(nom, prenom, age, ville, mail);

for(let compter = 0; compter <=15; compter++){
    console.log(compter+ "js");
}

function chiffre(param, param1){
    console.log(param + param1);
}
chiffre(5,15);*/

/*function calculatrice(param, param1, operateur){
if(operateur == "addition"){
    console.log(param + param1);
}
else if(operateur == "multiplication"){
    console.log(param * param1);
}
else if(operateur == "division"){
       console.log(param / param1);
}
else if(operateur == "soustractions"){
    console.log(param - param1);
}
}*/

/* fonction qui prend en parametre un chiffre 
crée une boucle qui tourne autant de fois que le chiffre qui a était entrée
dans la boucle vérifier index si il est paire affiché paire et l'inverse
*/
/*function chiffre(param1){

    for (let index = 0; index <= param1; index++) {
        console.log(index);
        if(index%2 == 0){
            console.log(" pair");
         }
         else{
            console.log(" impair");
         }
        
    }
 
}
chiffre(10)*/

/* tableau avec 8 fruit + une boucle qui affiche les 8 fruits*/

/*var tableau = ["fraise", "poire", "abricot", "tomate", "banane", "pomme", "raisin", "pastèque", "koba la D"]
for(let index=0; index<tableau.length; index++){
    console.log(tableau[index]);
    console.log(index)
}*/
/* créé var un tableau vide prenoms avec un S utilisé for qui compte jusqu'a 5 dans ma boucle je crée une variable prenom qui est égale au prompt qui demande le prenom sous cette ligne la je sors de la boucle et je fais une boucle*/
/* chercher comment ajouté dans une div une balise p avec du js et comment lui mettre un background color blue*/
/*document.body.onload = addElement
function addElement(){
    var div = document.createElement("div");
    var contener = document.createTextNode('salut bande de sgueg');
    div.appendChild(contener);
    var div1 = document.getElementById('texte1');
   document.body.insertBefore(div, div1);
}*/

/* 
crée une fonction qui prend en parametre 3 chiffres et elle return le plus grand chiffres */
/*
function chiffre(param,param1,param2){
if(param<param2 && param1< param2){
    return param2;
}else if(param2<param1 && param<param1){
     return param1;
}else if (param1<param && param2<param){
return param;
}

}
console.log(chiffre(5,6,9));*/

/*
regarder comment ajoouter du texte avec js*/

/*rechercher 4 fonctions qui existent déjà dans js qui permettent de faire des modfi sur un tableau exemple : push (les essayer) et trouvé 4 animations a faire en js */







/* cette fonction sert a triée les éléments d'un tableau par défauts le trie
s'effectue sur les elem converti en chaine de caractère et selon la valeur des unités utf*/

/*const mw = ["pm", "ar", "snipe", "pistolet"];
mw.sort();
console.log(mw);
const bo = [7, 3, 9, 150, 22];
bo.sort();
console.log(bo);
/* fffffffffffffffffffffffffffffffffffff*/






/* pop ça sert à suppr le deernier élément du tableau et le retourne (le sort) ça modif la longueur du tableau

const sayan = ["ssj1", "ssj2", "ssj3", "ssj4", "ssjgod", "ssjblue"];
console.log(sayan.pop());
console.log(sayan);
sayan.pop();
console.log(sayan);*/




/*reduce est une fonction qui accumul et qui traite les valeurs d'une liste de la gauche vers la droite afin de le reduire a une seule valeur

const makelele = [7, 1, 3, 4];
const kante = 0;
const mbaP = makelele.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    kante
);
console.log(mbaP)*/

/* ça cre un nv tableau avec les résultats multiplié ou additionnés
const tab = [1, 5, 3, 19];
const taab = tab.map(x => x * 3);
console.log(taab);*/

/*const sabre = ["shisui", "amaterasu", "kisame"];
const sabreee = sabre.push("enma");
console.log(sabreee);
sabre.push("mokuton", "futon", "katon", "kurama");
console.log(sabre)

const pos = sabre.indexOf("shisui");
console.log(pos);*/

