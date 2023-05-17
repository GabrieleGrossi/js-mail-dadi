const io = Math.floor(Math.random()* (6 - 1 + 1)) + 1
console.log(io)
const pc = Math.floor(Math.random()* (6 - 1 + 1)) + 1
console.log(pc)

if (io > pc) {
    console.log('Hai vinto')
} else {
    console.log('Hai perso')
}