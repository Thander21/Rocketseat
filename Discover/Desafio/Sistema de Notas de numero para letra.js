
// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

function pegarNota(nota){
    let notaA = nota >= 90 && nota <= 100
    let notaB = nota >= 80 && nota <= 89
    let notaC = nota >= 70 && nota <= 79
    let notaD = nota >= 60 && nota <= 69
    let notaF = nota < 60 && nota >= 0
    let notaFinal;

    if(notaA){
        notaFinal = 'A'
    }
    
    else if(notaB){
        notaFinal = 'B'
    }
    
    else if(notaC){
        notaFinal = 'C'
    }
    
    else if(notaD){
        notaFinal = 'D'
    } 
    
    else if(notaF){
        notaFinal = 'F'
    }
    
    else console.log("Sua nao foi identificada corretamente");
    
    return notaFinal
}


console.log(`Sua nota final foi ${pegarNota(75)}`)
console.log(`Sua nota final foi ${pegarNota(65)}`)
console.log(`Sua nota final foi ${pegarNota(123)}`)


