//Criando e adicionando Elementos no HTML

const div = document.createElement("div")

div.innerText = "Olá devs"

const body = document.querySelector('body')
const main = document.querySelector('main')

//body.prepend(div)
//body.append(div)

//body.insertBefore(div, main)
body.insertBefore(div, main.nextSibling)