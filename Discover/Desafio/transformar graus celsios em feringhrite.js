// Crie uma função que receba uma string em celsius ou fahrenheit
// e faça a transformação de uma unidade para outra 
//     C = (F - 32) * 5/9 
//     F = C * 9/5 + 32

function converterGraus(graus){
    const cExiste = graus.toUpperCase().includes('C')
    console.log(cExiste)
    const fExiste = graus.toUpperCase().includes('F')
    console.log(fExiste)

    if (cExiste) {
        graus = graus.toUpperCase().replace("C", "")
        graus = graus * 9/5 + 32
        graus = Number(graus).toFixed(2) + "F"
    } else 
    
    if (fExiste) {
        graus = graus.toUpperCase().replace("F", "")
        graus = (graus - 32) * 5/9 
        graus = Number(graus).toFixed(2) + "C"

    }
    
    else return null

    return graus
}

console.log(converterGraus("10C"))