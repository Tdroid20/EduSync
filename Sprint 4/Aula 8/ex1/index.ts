let array: Array<number> = [10, 12, 15, 
    20, 22]

let adicional: number = 7
    for(let i = 0; i <= array.length - 1; i++) {
        let result = array[i] + adicional
        console.log(`“O número ‘${array[i]}’, somado com ‘${adicional}’ é = ${result}`)
}