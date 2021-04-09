var mail = ["simone@gmail.com", "marco@gmail.com", "davide@gmail.com", "helton@gmail.com"];

mail.push('cane@gmail.com');

//console.log(mail);

var miaMail = prompt("Inserisci la tua mail per confermare che sia nella lista");

var contaMail = mail.length;
// console.log(contaMail);

var presenzaInLista = false;

for( var i = 0; i < contaMail; i++){
    if(miaMail === mail[i]){
        console.log("La tua mail è presente nella lista");
        presenzaInLista = true;
    }
}
if(!presenzaInLista){
    console.log("La tua mail NON è presente nella lista");
}