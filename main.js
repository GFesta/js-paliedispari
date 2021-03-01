//PALINDROMA
//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//chiedo all'utente di inserire una parola
var parolaInserita = prompt("Inserisci una parola");

//controllo se la parola inserita e palindroma o no
function checkPalindrome(parola) {

    // trasformo la stringa in un array
    var arrayValues = parola.split('');

    // inverto i valori dell'array
    var reverseArrayValues = arrayValues.reverse();

    // transformo la stringa in array
    var reverseString = reverseArrayValues.join('');

    if(parola == reverseString) {
        document.getElementById("palindroma").innerHTML = "La parola " + parolaInserita + " e palindroma";
    } else {
        document.getElementById("non-palindroma").innerHTML = "La parola " + parolaInserita + " non e palindroma";
    }
}
checkPalindrome(parolaInserita);

//PARI E DISPARI
//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo se l'utente ha vinto.

//chiedo cosa sceglie tra pari o dispari
var parioDispari = prompt("Scegli pari o dispari");

//chiedo e l'utente sceglie un numero da 1 a 5
var numeroUtente = parseInt(prompt("scegli un numero da 1 a 5"));
console.log(numeroUtente);

//genero numero random per il computer 
//var numeroComputer = Math.floor(Math.random()*5 + 1)
//console.log(numeroComputer);

//genero numero random per il computer con una funzione
function numeroComputer() {
    var numeroComputer = Math.floor((Math.random() * 5) + 1);
    console.log(numeroComputer);
}

//si sommano i due numeri
var somma = numeroUtente + numeroComputer;
console.log(somma);

//funzione pari o dispari
function pari0Dispari(somma) {
    if (parioDispari == "pari" && somma % 2 == 0){
    return true;
    } else if (parioDispari == "dispari" && somma % 2 != 0){
    return true
    } else {
    return false
    }
}

//dichiro se l'utente vince o perde
if (pari0Dispari(somma) == true){
    alert("hai vinto");
} else {
    alert("hai perso");
}