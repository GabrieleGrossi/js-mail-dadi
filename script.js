const io = Math.floor(Math.random()* (6 - 1 + 1)) + 1
console.log('il mio tiro dei dadi è ' + io)
const pc = Math.floor(Math.random()* (6 - 1 + 1)) + 1
console.log('il tiro dei dadi del pc è ' + pc)

if (io > pc) {
    console.log('Hai vinto');
} else if (io < pc) {
    console.log('Hai perso, riprovaci');
} else {
    console.log('Hai pareggiato, riprovaci');
}