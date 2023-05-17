/*ESERCIZIO MAIL*/
// Chiedere all'utente la sua mail
// Controllare (senza nessun tipo di ARRAY) se la mail fornita è fra quelle nella lista da me inventata
// Se lo è, allora può accedere
// Altrimenti no (generare solo un messaggio di accesso)


//inserire la mail
const mail = prompt('Inserire la propria mail');
console.log(mail)


//mail consentite per l'accesso
const listMail = ['ginetto@gmail.com','gina@gmail.com','ginetta@gmail.com']

let mailGiusta;

mailGiusta= false;

//condizioni di accesso
for(let i = 0; i < listMail.length; i++) {
    if (mail === listMail[i]) {
        mailGiusta = true
        
    }
}
if (mailGiusta){
    console.log('Benvenuto nel nostro sito')
} else {
    console.log('Errore nella compilazione della mail. Prego riprovare o registrarsi al sito')
}







