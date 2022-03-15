var filmes= [
    {
    "id": 1,
    "title": "Die Hard",
    "valor": 12.00,
    "rating": 5.0
    },
    
    {
    "id": 2,
    "title": "Homem aranha 1",
    "valor":8.00,
    "rating": 4.0
    },
    
   {
    "id": 3,
    "title": "Homem de ferro",
    "valor": 7.00,
    "rating": 3.0
    },
    
   {
    "id": 4,
    "title": "Die Hard",
    "valor": 13.00,
    "rating": 5.0
    }
];

let desconto = filmes.map(x => x.valor * 0.9)
console.log(`Total com seu cupom de desconto: ${desconto}`)

let upValue = filmes.filter(x => x.valor >= 10)
for (let i = 0; i < upValue.length; i++) {
    console.log(`Filmes acima de 10 reais: ${upValue[i].valor}`)
}

let descontos = [];
let contador = 0;

let mediaDescontosMap = filmes.map(function(value) {
    if(value.valor <= 10) {
        descontos[contador] = value
        contador++
        return value;
    }
})

let mediaDescontosReduce = descontos.reduce(function(sum, item) {
    return sum + item.valor;
}, 0)
let tot = mediaDescontosReduce / mediaDescontosMap.length

console.log(tot);