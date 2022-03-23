let date: Date = new Date()

let day = date.getDate()
let month = date.getMonth() + 1
let yaers = date.getFullYear()

console.log(date.getDate());
console.log(month);
console.log(yaers);

let getDay: any = prompt('Qual o dia do seu nascimento?')
let getMonth: any = prompt('Qual o mês do seu nascimento?')
let getYears: any = prompt('Qual o ano completo do seu nascimento?')

console.log(getDay);
console.log(getMonth);
console.log(getYears);

if(getMonth < month) {
    alert(`seu aniversario passou`)
} else if(getMonth == month) {
    if(getDay == day) {
        alert(`Feliz Aniversario`)
    } else if(getDay < day) {
        alert(`seu aniversario passou`)
    } else {
        alert(`Seu Aniversario não ocorreu ainda`)
    }
} else {
    alert(`Seu nive  não chegou`)
}

