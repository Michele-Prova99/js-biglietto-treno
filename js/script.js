var km = parseInt(prompt('Quanti km devi fare?'));
var eta = parseInt(prompt('Quanti anni hai?'));
var prezzo = 0.21 * km;

if (eta < 18) {
    prezzo = 0.80 * prezzo;
}   else if (eta > 65) {
    prezzo = 0.60 * prezzo;
}

document.getElementById('biglietto').innerHTML= 'Il prezzo del biglietto è di' + ' ' + prezzo + '$';
