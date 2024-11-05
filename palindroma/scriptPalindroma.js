"use strict";
console.clean;

// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let parola = prompt("prova");
const reverseParola = palindroma(parola);
if(parola === reverseParola){
    console.log(`La parola " ${parola} " e' palindroma`);
} else {
    console.log(`La parola ricercata non e' palindroma, perche' il contrario di " ${parola} " e' : " ${reverseParola} " `);
}

palindroma(parola);

function palindroma(wrd){
    let reverseWrd = "";
    for(let i= wrd.length - 1 ; i >= 0 ; i-- ) {
        reverseWrd = reverseWrd + wrd[i]; 
    }
    return(reverseWrd);
}