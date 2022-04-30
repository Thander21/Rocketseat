// Manupular elemento do DOM

const element = document.querySelector('h1')

console.log(element.textContent)

element.textContent += " Olá Devs"
console.log(element.textContent)

element.innerText = "Óla Devs aki"
console.log(element.innerText)

element.innerHTML= "Óla <small>Devs</small> se <strong>foram</strong>"
console.log(element.innerHTML)

const elementInput = document.querySelector('input')
elementInput.value = "Digita aki seu texto"
console.log(elementInput.value)

const header = document.querySelector('header')
console.log(header.id)
header.setAttribute('id', 'header')
console.log(header.id)

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('class'))

header.removeAttribute('id')
console.log(header.id)

