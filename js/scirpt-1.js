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



//condizioni di accesso
for(let i = 0; i < listMail.length; i++) {
    mailGiusta= false
    if (i === listMail) {
        mailGiusta = true
        console.log('Benvenuto')
    } else if (i !== listMail) {
        console.log('Email errata. Riprova o registrati');
    }
}







