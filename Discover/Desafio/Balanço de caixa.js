// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.


let fluxoDeCaixa = {
    receitas: [15, 200, 32, 14, 5, 16, 22, 55.568, 55.693],
    despesas: [69, 50, 45, 9, 8.9684, 74,5 ,199]	
}


function soma(array){
    let soma = 0

    for (let value of array){
        soma += value
    }

    return soma;
}

function balanco(){
    const balanco = soma(fluxoDeCaixa.receitas) - soma(fluxoDeCaixa.despesas)

    if(balanco > 0){
        return console.log(`Parabéns esta  com saldo é POSITIVO de: R$ ${balanco.toFixed(2)}`)
    }else if(balanco < 0){
        console.log(`Que pena, está com saldo NEGATIVO de: R$ ${balanco.toFixed(2)}`)
    }else console.log(`ATENÇÃO, seu saldo é exatamente R$ ${balanco}`)
    
}
balanco()