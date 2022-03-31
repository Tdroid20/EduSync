"use strict";

let pack = [];
const consult = () => {
    let $url = `https://62361b7feb166c26eb2f488a.mockapi.io/pacotes`;
    fetch($url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(data => {
        let resultConvert = data;
        let result = resultConvert;
        for (let i = 0; i < result.length; i++) {
            pack[i] = result[i];
            console.log(pack[i]);
        }
        packagesLoad();
    });
};
consult();
const packagesLoad = () => {
    const div = document.getElementById('packagesList');
    
    for (let i = 0; i < pack.length; i++) {
        const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul","ago","set","out","nov","dez"];
        let data = new Date(pack[i].data);
        let dataFormatada = (+ (data.getDate() ) + '/' + meses[(data.getMonth())] + '/' + data.getFullYear());
        
        div.innerHTML += `<div class="card" id="pacote${pack[i].nome}">
    <p class="packageTitle">${pack[i].nome}</p>
    <p class="packageDesc">${pack[i].descricao}</p>
    <br>
    <p class="packageDate">Data da viagem: ${dataFormatada}</p>
    <div class="btn">
        <button class="packageBtn edit">Editar</button>
        <button class="packageBtn delete">Excluir</button>
    </div>`;
    }
};
