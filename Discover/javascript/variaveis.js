let rahman = 'rahman'

console.log(rahman === 'rahman')

let a = 5

let x = a +5

console.log(x)

console.log(typeof a, typeof x, typeof rahman)

//concatenação
console.log( rahman + " é um nome " + typeof rahman)

//interpolação mais recomendado para uso
console.log( `${rahman} é um nome  ${typeof rahman}`)

//objeto se sua { } colchetes
const person = {
    name: 'Rahman',
    age: 30,
    weight: 88,
    isAdmin: true
}
console.log(person)

//Arrays se usa [] chaves 
const animals = [
    'lion',
    'monkey',
    'cat'
]
console.log(animals[1], animals.length)