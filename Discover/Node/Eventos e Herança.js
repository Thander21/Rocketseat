const {EventEmitter} = require('events')
const ev = new EventEmitter()

//console.log(ev) 

//once ouve uma unic avez on ouve sempre
ev.on('saySomething', (message) => {
    console.log('eu ouvi você:', message)
})

ev.emit('saySomething', " para de mexer")


//console
const {inherits} = require('util')

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('chapolin')

chapolin.on('Me Ajude', () => console.log(`Eu o ${chapolin.name} Colorado`))

console.log('Oh e agora, quem poderá me deventer?')
chapolin.emit('Me Ajude')