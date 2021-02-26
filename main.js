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
    }
    else {
        document.getElementById("non-palindroma").innerHTML = "La parola " + parolaInserita + " non e palindroma";
    }
}
checkPalindrome(parolaInserita);