let fibo = []

fibo.push(0, 1)

for(let X = 2; X < 15; X++) {
    fibo[X] = fibo[X - 2] + fibo[X - 1];
}
console.log(fibo)