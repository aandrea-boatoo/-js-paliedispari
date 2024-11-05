"use strict";
console.clean;

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const scommessa = prompt("scegli fra pari o dispari");
const numUser = parseInt(prompt("scegli un numero da 1 a 5"));
const numPc = random(1, 5);
pariDispari(scommessa, numUser, numPc)




function random(min, max){
    const numeroRandom =  Math.floor(Math.random() * (max - min + 1 )) + min ;
    return numeroRandom;
}


function pariDispari(parDis, user, pc){
    let somma = user + pc;
    if((parDis === "pari" ) || (parDis === "dispari") ){
        if (!(user <= 5) && (user >= 1)){
            console.log(`input non valido, scegli un numero tra 1 e 5, purtroppo "${user}" non rientra nei parametri`);    
        } else {

            if((somma % 2 == 0 && parDis === "pari") || (somma % 2 === 1 && parDis === "dispari")){
                console.log(`Congratulazioni hai vinto, infatti ${user} + ${pc} (numero del pc) fa ${somma}`)
            }else{
                console.log(`Peccato hai perso, sara' per la prossima, infatti ${user} + ${pc} (numero del pc) fa ${somma}`)
            }
        }   
    }else{
        console.log(`hai inserito un input non valido, ricorda che puoi scegliere solo "pari" e "dispari",  mentre tu hai digitato "${parDis}"`)
    }
}
