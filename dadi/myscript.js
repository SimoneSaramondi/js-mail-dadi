var numeroGiocatore;
numeroGiocatore = Math.floor(Math.random()*6) + 1;
console.log("Il numero creato per il giocatore è: " + numeroGiocatore);

var numeroComputer;
numeroComputer = Math.floor(Math.random()*6) + 1;
console.log("Il numero creato per il computer è: " + numeroComputer);

if(numeroGiocatore > numeroComputer){
    console.log("Il giocatore vince");
} else if (numeroComputer > numeroGiocatore){
    console.log("Il computer vince");
} else{
    ("I due giocatori hanno avuto numeri uguali");
}