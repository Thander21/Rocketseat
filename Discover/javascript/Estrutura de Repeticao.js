//Estrutura de Repetição

//For - Para

for (let index = 1; index <= 10; index++) {
    if (index == 5) {
        continue
    }
    console.log(index)   
}

//while - Equanto

let i = 63540

while (i > 10) {
    console.log(i)
    
    i /= 35;
}


//for...of
let name = 'Rahman'
let names = ['Rahman', 'Paulo', 'João']

for (let array of names) {
    console.log(array)    
}


//for...in

let person = {
    name: 'Rahman',
    age: 30,
    weight: 88.7
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}