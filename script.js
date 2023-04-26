var boje = ["white", "black", "red", "green", "blue", "pink", "brown", "purple"]
const dugme = document.getElementById("dugme");
let opcije = document.getElementById("opcije")
let bojica;
let noveBoje = [];

for(i=0; i<boje.length; i++){
    opcije.innerHTML += boje[i] + " - "
}

function pokupiBoju(){
    let inputPolje1 = document.getElementById('inputPolje').value;
    let inputPolje = inputPolje1.toLowerCase();
    if(inputPolje === "bela"){
        bojica = boje[0]
    }
    else if(inputPolje === "black"){
        bojica = boje[1]
    }
    else if(inputPolje === "red"){
        bojica = boje[2]
    }
    else if(inputPolje === "green"){
        bojica = boje[3]
    }
    else if(inputPolje === "blue"){
        bojica = boje[4]
    }
    else if(inputPolje === "pink"){
        bojica = boje[5]
    }
    else if(inputPolje === "brown"){
        bojica = boje[6]
    }
    else if(inputPolje === "purple"){
        bojica = boje[7]
    }
    else{
        noveBoje.push(inputPolje)
        bojica = noveBoje[0]
    }

}
function boja(par){
    if (par === 1){
    pokupiBoju()
    document.body.style.backgroundColor = bojica;
    }
    else if (par === 2)
    {
    document.body.style.backgroundColor = "#ddf1fa"
    }
}
function promeniPozadinu(){
    let polje = document.getElementById("inputPolje")
    polje.style.backgroundColor = "#4eb8dd"
    polje.style.color = "#081656"
}
function vratiBoju(){
    let polje = document.getElementById("inputPolje")
    polje.style.backgroundColor = "#f3fafd"
    polje.style.color = "#4eb8dd"
}