let Weight = prompt(`Qual seu peso?`).replace(',', '.')
let statusW = false
let statusH = false
let years;

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
document.querySelector('#calc').innerTEXT = `<p>Seu IMC é ${(imc.toFixed())}</p>`
