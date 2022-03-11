let cep = document.getElementById('cep')
let logradouro = document.getElementsByClassName('logradouro')
let bairro = document.getElementsByClassName('bairro')
let localidade = document.getElementById('localidade').value
let uf = document.getElementsByClassName('uf')

let resultLocal
const consult = CEP => {
    let url = `https://viacep.com.br/ws/${CEP}/json/`

    console.log(url);
    fetch(url, {
        method: 'GET',
        headers: { 
            "Content-Type": "application/json",
        },
    })
    .then(res => res.json())
    .then(result => {
        console.log(result)
        localidade = result.localidade
        logradouro.value = result.logradouro
        bairro.value = result.bairro
        uf.value = result.uf
    }).catch(err => console.log(err))
}


cep.addEventListener("input", () => {
    if(cep.value.length > 7) {
    consult(cep.value.replace('-', ''))
} 
})
 
