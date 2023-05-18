//L'utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

const word = prompt ('inserisci una parola');
console.log(word);

const word1 = prompt ('inserisci una seconda parola');
console.log(word1);

if (word.length === word1.length) {
    console.log('The word are the same length');
}else if (word.length > word1.length) {
    console.log('The first word have more length');
} else {
    console.log('The second word have more length');
}
