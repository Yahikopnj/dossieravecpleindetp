let elem = document.getElementById("lii");
elem.addEventListener('click', () =>{
    elem.style.backgroundColor = "green";
});




let eleme = document.getElementById("lili");
eleme.addEventListener('mouseover', () =>{
    eleme.style.color = "pink";
});
let elemeee = document.getElementById("mili");
elemeee.addEventListener('dblclick', () =>{
    elemeee.style.rotate = "100000000deg";
    elemeee.style.transition = "1000ms";
    elemeee.style.fontSize = "60px";
});

/*function menude(){
  let deroul = document.createElement("div");
let deroulee = document.createTextNode("accueil");
deroul.appendChild(deroulee);
deroul= document.getElementById("deroulant");
addEventListener('click', () => {
    deroul.style.height = "100px";
})

}*/

/*
let ekip = getElementById("navv");
window.getComputedStyle(ekip).display == "block";*/

var block = "true";

navv = document.getElementById("navv");

navv.addEventListener('click', () => {
    var blocker = document.getElementById("menud");
    if (block != "false") {
        blocker.style.display = "none";
        block = "false";
    } else {
        blocker.style.display = "block";
        block = "true";
    }
})

/*let verif = "true";
let goldorak = document.getElementById("deroulant");

    if(verif == "true"){
goldorak.style.display = "block";
verif = "false";
    }else{
        goldorak.style.display = "none";
        verif = "true";
    }*/
 
    
    
var pk = document.getElementById("color");
var ok = document.getElementById("coloreuh");
let colorrrr = true;
pk.addEventListener('click', () => {
    
    if(colorrrr == true){
    ok.style.backgroundColor = "red";
        colorrrr = false
    }
    else{
        ok.style.backgroundColor = "aquamarine"
        colorrrr = true
    }
});


var pka = document.getElementById("coloriage");
var aok = document.getElementById("coloriager");
let colo = true;
pka.addEventListener('click', () => {
    
    if(colo == true){
    aok.style.backgroundColor = "yellow";
        colo = false
    }
    else{
        aok.style.backgroundColor = "blue"
        colo = true
    }
});

let ensav = document.getElementById("savoir");
let lor = document.getElementById("lorem");
let xdxxd = true;
ensav.addEventListener('click', () => {
    if(xdxxd == true){
lor.style.display = "block";
lor.style.fontSize = "38px";
lor.style.animation = ""
xdxxd= false;
    }else{
        lor.style.display = "none";
        xdxxd = true;
    }
});























































































































































/*let elemmee = document.getElementById("limi");
elemmee.addEventListener('mouseover', () => {
    elemmee.style. = "orange";
})*/

