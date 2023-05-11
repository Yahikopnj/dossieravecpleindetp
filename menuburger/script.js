function menu(){
    var liste = document.getElementsByClassName("lili");
    for (let index = 0; index < liste.length; index++){
        const nume = liste[index];
        if(window.getComputedStyle(nume).display == "block"){
            nume.style.display = "none";
        }else{
            nume.style.display = "block";
        }
    }
}