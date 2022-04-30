//aplicativo de frases motivacionais 


function createPhrases() {
    console.log("Aplicativo de frases1")
    console.log("Aplicativo de frases2")
    console.log("Aplicativo de frases3")
}

createPhrases()

//function expression ou anonymou que tem 2 parametros

const sum = function(number1, number2){
    console.log(number1 + number2)

}

sum(21,55) //função com os argumentos


//return

const sum2 = function(number10, number20){
    let total = number10 + number20
    return total

}

let number100 = 32
let number200 = 25

console.log(`O numero 10 é ${number100}`)
console.log(`O numero 20 é ${number200}`)
console.log(`O numero 10 é ${sum2(number100, number200)}`)


//Arrow function

const sayMyName = (name) => {
    console.log(name)
}
sayMyName('Rahman')


//Function constructor

function Person(name, age){
    this.name = name
    this.age = age
    this.walk = () => {
        return this.name + " está andando"
    }
}

const rahman = new Person('Rahman', 43)
const joao = new Person('João', 16)

console.log(rahman.age, joao.name, rahman.walk())

// function auto executavel

;(function() {
    console.log("456")
})()