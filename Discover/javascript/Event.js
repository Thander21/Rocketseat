//Eventos

function print(){
    console.log('print')
}

const input = document.querySelector('input')
// input.onkeydown = function(){
//     console.log('baixo')
// }

input.onkeyup = function(){
    console.log('cima')
}

// input.onkeypress = function(){
//     console.log('press')
// }

const h1 = document.querySelector('h1')

h1.addEventListener('mouseover', print)

input.onkeyup = function(event){
    console.log(event)
}