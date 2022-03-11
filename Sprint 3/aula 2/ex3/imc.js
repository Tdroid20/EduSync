let imcDiv = document.querySelector('#imc')

const calc = () => {
let Weight = document.querySelector('#Weight').value
    Weight = Weight.replace(',', ".")

let height = document.querySelector('#height').value
    height = height.replace(',', ".")

let imc = Weight / height ^ 2
console.log(`imc: ${imc.toFixed()}`)

    imcDiv.innerHTML = `O imc é ${imc.toFixed()}`
}