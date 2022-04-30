//if ...else ...
let temperature = 40
let highTemperature = temperature >= 40
let mediumTemperature = temperature < 40 && temperature >= 38 
let lowTemperature = temperature < 38 && temperature >= 37


if(highTemperature){
    console.log('Você esta morrendo corra pro hospital')
} 

else if(mediumTemperature){
    console.log('Você esta com muita febre')
} 

else if(lowTemperature){
    console.log('Você esta febril')
} 

else  console.log('Você esta otimo')



//switch

function calculate(number1, operator, number2){
    let result = 0

    switch (operator) {
        case '+':
            result = number1 + number2
            break;
        case '-':
            result = number1 - number2
            break;
        case '*':
            result = number1 * number2
            break;
        case '/':
            result = number1 / number2
            break;
    
    
        default:
            console.log('não implementado')
            break;
    }
    
    return result
}

console.log(calculate(5, '', 5))


//throw e try....catch

function sayMyName(name = ''){
    if (name === '') {
        throw new Error('Nome Obrigaorio')
    }
    console.log(name)
}

try {
    sayMyName('Rahman')
}catch (e) {
    console.log(e)
}

console.log('Teste, a aplicação não parou');

