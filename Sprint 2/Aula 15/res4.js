let names = [
    'joão',
    'maria',
    'igor',
    'lucas',
    'Gabriel'
]

let state = false

for(let i = 0; i < names.length; i++) {
    if(names[i] === 'paulo') {
        state = true
    }
}

if(state === true) {
    console.log('Achei!!!')
} else {
    console.log(`Não achei T-T`)
}