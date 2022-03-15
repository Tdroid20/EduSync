let array = [12, 17, 1, 43, 18,  123, 91, 10, 16, 10]

let media = array.reduce((values, item) => values += item, 0) //values é o oque armazena os valores.

let mediaTot = media / array.length

console.log(`Total: ` + mediaTot)