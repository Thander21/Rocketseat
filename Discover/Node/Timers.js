//Timeout
const timeOut = 5000
const finished = () => console.log("Finalizou")

setTimeout(finished, timeOut)

console.log("Mostrar")


//ClearTimeout
let timer = setTimeout(finished, timeOut)

clearTimeout(timer)


//inteval
const timeOutInterval = 1000
const checking = () => console.log("Checking!")

let interval = setInterval(checking, timeOutInterval)


//clear setInterval

setTimeout( () => clearTimeout(interval), 3100)


