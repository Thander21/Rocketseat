// getElementById() pegar elemento da DOM

//HTMLColleciotn não aceita foreach
const element = document.getElementById('blog-title') 
const element1 = document.getElementsByClassName('one')
const element2 = document.getElementsByTagName('meta')

//NodeList aceita foreach
const element3 = document.querySelector('.one')
const element4 = document.querySelectorAll('h2')

console.log(element)
console.log(element1)
console.log(element2)
console.log(element3)
console.log(element4)