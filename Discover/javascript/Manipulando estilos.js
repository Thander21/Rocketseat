
//Manipulando Estilos

const elementMain = document.querySelector('main')
const element = document.querySelector('body')
const elementHeader = document.querySelector('header')

elementMain.style.backgroundColor = "#ff9019" //laranja


elementHeader.classList.toggle('head')
elementHeader.classList.add('head')
elementHeader.classList.remove('head')




console.log(element.classList)