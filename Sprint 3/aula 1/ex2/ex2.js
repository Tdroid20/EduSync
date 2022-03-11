/*
==============================// highframe.tech //=============================
*/

const primaryValue = parseInt(prompt(`Digite um valor numerico`))
let secundaryValue;

do {
     secundaryValue = parseInt(prompt(`Digite outro valor`))

} while(secundaryValue == 0)

let result = primaryValue / secundaryValue;
console.log(`O resultado é ${result.toFixed()}`)

const changeMessage = document.querySelector('#change')

let resultMessage = changeMessage.innerHTML = `O resultado é ${result.toFixed()}`

let stats = false

function show() {
    if(stats === false) {
        changeMessage.innerHTML = `O resultado é ${result.toFixed()}`
        but.innerHTML = `<button type="submit" id="show" onclick="show()">Ocultar</button>`
        return stats = true
    } else {
        changeMessage.innerHTML = 'Obrigado amigo ❤' 
        but.innerHTML = `<button type="submit" id="show" onclick="show()">Ver resultado</button>`
        return stats = false
    }
}

setTimeout(() => {
    changeMessage.innerHTML = 'Obrigado amigo ❤' 
    const but = document.querySelector('#but')
    but.innerHTML = `<button type="submit" id="show" onclick="show()">Ver resultado</button>`
}, 3000)


