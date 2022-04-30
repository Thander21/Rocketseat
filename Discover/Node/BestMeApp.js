const questions = [
    "Qula o seu Nome?",
    "o que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para mehorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei hoje?"
]
const answers = []

const ask = ( index = 0 ) => {
    return process.stdout.write("\n\n" + questions[index] + "\nR: ")
}

process.stdin.on("data", data => {
    answers.push(data.toString().trim())

    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    } 
})

process.on('exit', () => {
    console.log(`
        Bacana ${answers[0]}!

        O que você aprendeu hoje foi:
            R: ${answers[1]}! 

        O que te aborreceu e vc poderia melhorar foi:
            R: ${answers[2]}!

        O que te deixou feliz hoje:
            R: ${answers[3]}!

        Quem você ajudou hoje:
            R: ${answers[4]}! 

        Parabens, volte amanha para novas reflexões

    `)
})

ask()