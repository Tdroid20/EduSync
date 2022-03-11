let filhos = [];
let salarios = [];
let i = 0


do {
    filhos[i] = parseInt(prompt(`QUANTOS CRIAS SE FEZ`))
   salarios[i] = parseInt(prompt(`PASSA SEU SALARIO AÍ CUMPADI`))
    i++
} while(salarios[i-1] > 0)

let soma = 0;
let somaFilhos = 0
for(let indice = 0; indice < salarios.length-1; indice++) {
    soma = salarios[indice] + soma
    somaFilhos = filhos[indice] + somaFilhos
}


let media = soma / (salarios.length-1)
let mediaFilhos = somaFilhos / (filhos.length-1)


let maior = 0
for (var bah = 0; bah < salarios.length-1; bah++) {
    if ( salarios[bah] > maior ) {
       maior = salarios[bah];
    }
 }

let salarioMinimo = 0;

for (var bah = 0; bah < salarios.length-1; bah++) {
    if ( salarios[bah] < 1000) {
       salarioMinimo++
    }
 }

let total = salarioMinimo / (salarios.length-1) * 100

console.log(`Media: ${media}`)
console.log(`Media de filhos: ${mediaFilhos}`)
console.log(`Maio salario: ${maior}`)
console.log(`Porcentagem com salario minimo: ${total.toFixed()}%`)