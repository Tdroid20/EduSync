let resultLocal
const cep = document.getElementById('cep')
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
        console.log(result.bairro)
        document.getElementById('localidade').value = result.localidade
        document.getElementById('logradouro').value = result.logradouro
        document.getElementById('bairro').value = result.bairro
        document.getElementById('uf').value = result.uf
    }).catch(err => console.log(err))
}


cep.addEventListener("input", () => {
    if(cep.value.length > 7) {
    consult(cep.value.replace('-', ''))
} 
})
 
