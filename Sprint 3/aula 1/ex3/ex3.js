
//OS FORS DA VIDA
let value = [];
let numbersCount = 0;

for(let i = 1; i <= 10; i++) {
   value[i] = prompt(`${i}) Digite um valor`)
}

for(let i = 1; i <= 10; i++) {
    if(value[i] >= 10 && value[i] <= 20) {
        numbersCount++
    }
}

// OS CONSOLES DA VIDA

console.log(`Temos ${numbersCount} numeros encontrados baseado nesse filtro`)