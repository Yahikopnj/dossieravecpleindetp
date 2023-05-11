
let lampa = document.importNode(imglambo, true)
let btnn = document.getElementById("btnajou");
let laam = document.getElementById("imglambo");
btnn.addEventListener('click', () => {
if(document.getElementById("panier").children.length == true){
    document.getElementById("panier").appendChild(imglambo);
}else{
    console.log("erreur")
}

})

/*
crée une page d'accueill sur cette page d'accueil 3 cadre et un footer header avec menu nav + 3 animations utile en js 
*/ 