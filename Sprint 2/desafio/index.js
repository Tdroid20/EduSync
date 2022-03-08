let Weight = prompt(`Qual seu peso?`).replace(',', '.')
let statusW = false
let statusH = false
let years = prompt(`Quantos anos você tem?`)

while(statusW === false) {
    if(Weight === null) {
    alert(`Ops! para continuar você precisa respoder essa pergunta`)
     Weight = prompt(`Qual seu peso?`)
} else {
    statusW = true
}
}

let height = prompt(`Qual sua altura?`).replace(',', '.')

while(statusH === false) {
    if(height === null) {
    alert(`Ops! para continuar você precisa respoder essa pergunta`)
     height = prompt(`Qual seu peso?`)
} else {
    statusH = true
}
}

let imc = Weight / height ^ 2



console.log(`O imc é ${imc.toFixed()}`)
alert(`O imc é ${imc.toFixed()}`)

if(imc.toFixed <= 20) {
    alert(`Recomendações: Inclua carboidratos simples em sua dieta, além de proteínas -
    indispensáveis para ganho de massa magra. Procure um profissional .
    `)

    alert(`Nivel de risco: Muitas complicações de saúde como doenças pulmonares e
    cardiovasculares podem estar associadas ao baixo peso.`)
    // < 20
} else if(imc.toFixed() >= 20 && imc.toFixed() <= 24) {
    alert(`Recomendações: Mantenha uma dieta saudável e faça seus exames periódicos.`)

    alert(`Nivel de risco: Seu peso está ideal para suas referências.`)

} else if(imc.toFixed() >= 25 && imc.toFixed() <= 29) {
    alert(`Recomendações: Adote um tratamento baseado em dieta balanceada, exercício físico
    e medicação. A ajuda de um profissional pode ser interessante`)

    alert(`Nivel de risco: Aumento de peso apresenta risco moderado para outras doenças
    crônicas e cardiovasculares.`)

} else if(imc.toFixed() >= 30 && imc.toFixed() >= 35) {
    alert(`Recomendações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um
    nutricionista e um médico especialista (endócrino).`)

   alert(`Nivel de risco: Quem tem obesidade vai estar mais exposto a doenças graves e ao
    risco de mortalidade.`)

} else {
    alert(`Recomendações: Adote uma dieta alimentar rigorosa, com o acompanhamento de um
    nutricionista e um médico especialista (endócrino).`)

    alert(`Nivel de risco: O obeso mórbido vive menos, tem alto risco de mortalidade geral
    por diversas causas`)
}

