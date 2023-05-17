/*ESERCIZIO MAIL*/
// Chiedere all'utente la sua mail
// Controllare (senza nessun tipo di ARRAY) se la mail fornita è fra quelle nella lista da me inventata
// Se lo è, allora può accedere
// Altrimenti no (generare solo un messaggio di accesso)


let mail = prompt('Inserire la propria mail');
console.log(mail)

const listMail = ['ginetto@gmail.com','gina@gmail.com','ginetta@gmail.com']

if (mail.value != listMail.value) {
    console.log('Benvenuto ' + mail +' , registrati al sito per accedere')
} else if(mail.value === listMail.value); {
    console.log('Ciao '+ mail + ' puoi entrare nel sito')
}