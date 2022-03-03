function soma(num1, num2, num3) {
    if(isNaN(num1)) return console.log(`O primeiro argumento não é um numero`)
    if(isNaN(num2)) return console.log(`O segundo argumento não é um numero`)
    if(isNaN(num3)) return console.log(`O terceiro argumento não é 2 numero`)

    return num1 + num2 + num3
}
soma(1, 4, 6)
