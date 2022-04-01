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
let resgisterBTN = `<button id="siginup" class="siginup" onclick="$register()">Cadastrar</button>`
let rquestUpBTN = `<button id="save" class="siginup" onclick="$save()" value="false">Salvar</button>`
const packagesLoad = () => {
    const div = document.getElementById('packagesList');
    let divInsert = ``;
    for (let i = 0; i < pack.length; i++) {
        const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
        let data = new Date(pack[i].data);
        let dataFormatada = (+(data.getDate() + 1) + '/' + meses[(data.getMonth())] + '/' + data.getFullYear());
        divInsert += `<div class="card" id="${pack[i].id}">
        <p class="packageTitle">${pack[i].nome}</p>
        <p class="packageDesc">${pack[i].descricao}</p>
        <br>
        <p class="packageDate">Data da viagem: ${dataFormatada}</p>
        <div class="btn">
            <button class="packageBtn edit" onclick="$edit(${pack[i].id})">Editar</button>
            <button class="packageBtn delete" onclick="$delete(${i})">Excluir</button>
        </div>
        </div>`;
        div.innerHTML = divInsert;
        const btn = document.getElementById('btFlex');
        btn.innerHTML = resgisterBTN
    }
};


const $register = () => {
    const inputName = document.getElementById('name');
    const inputDate = document.getElementById('date');
    const inputDesc = document.getElementById('description');
    const inputRadio = document.querySelector('input[name="bah"]:checked');
    let _name = inputName.value;
    let _date = inputDate.value;
    let _desc = inputDesc.value;
    let _status = inputRadio.value;
    const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    let data = new Date(_date);
    let dataFormatada = (data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + (data.getDate() + 1));
    let dataAtual = new Date();
    let dataAtualFormatada = (dataAtual.getFullYear() + '-' + (dataAtual.getMonth() + 1) + '-' + (dataAtual.getDate()));
    if (_name === '')
        return alert('O nome do pacote não foi informado');
    if (_date === '') {
        alert('A data de viagem não foi informada');
    }
    if (_desc === '') {
        alert('A descrição não foi informada');
    }
    if (dataFormatada < dataAtualFormatada)
        return alert(`Você informou uma data passada.`);
    let newPackage = {
        nome: _name,
        descricao: _desc,
        data: _date,
        status: _status,
        id: pack.length + 1
    };
    console.log(newPackage);
    pack.push(newPackage);
    packagesLoad();
    // zerando inputs
    let resName = document.getElementById('name');
    let resDate = document.getElementById('date');
    let resdesc = document.getElementById('description');
    let resStatus = document.getElementById('inactive');
    resName.value = '';
    resDate.value = '';
    resdesc.value = '';
    resStatus.checked = true;
    window.location.href = `http://localhost:3000/src/pages/home.html#${pack.length}`;
};
const $delete = (indice) => {
    pack.splice(indice, 1);
    packagesLoad();
};

let documentEdit = []
let editMode = false
let $save = () => {
    editMode = false
    console.log(editMode)
    $editMode(documentEdit)
}
const $editMode = (edit) => {
    console.log(editMode)
    const inputName = document.getElementById('name');
    const inputDate = document.getElementById('date');
    const inputDesc = document.getElementById('description');
    const inputRadio = document.querySelector('input[name="bah"]:checked');
    
    let _name = inputName.value;
    let _date = inputDate.value;
    let _desc = inputDesc.value;
    let _status = inputRadio.value;

    edit.nome = _name;
    edit.data = _date;
    edit.descricao = _desc
    if(_status == "false") {
        edit.status = false
    } else if(_status == "true") {
        edit.status = true
    }

    if(editMode == true) {
        document.getElementById('btFlex').innerHTML = ``
        document.getElementById('btFlex').innerHTML = rquestUpBTN
        console.log(editMode)
    } else {
        document.getElementById('btFlex').innerHTML = ``
        document.getElementById('btFlex').innerHTML = resgisterBTN;
        let resName = document.getElementById('name');
        let resDate = document.getElementById('date');
        let resdesc = document.getElementById('description');
        let resStatus = document.getElementById('inactive');
        resName.value = '';
        resDate.value = '';
        resdesc.value = '';
        packagesLoad();
        console.log(editMode)
    }
    
}
const $edit = (id) => {
    const inputName = document.getElementById('name');
    const inputDate = document.getElementById('date');
    const inputDesc = document.getElementById('description');
    const inputRadio = document.querySelector('input[name="bah"]:checked');
    
    let edit = pack.filter(x => x.id == id)[0];
    console.log(edit)
    let _name = inputName.value;
    let _date = inputDate.value;
    let _desc = inputDesc.value;
    let _status = inputRadio.value;

    const meses = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    let DataEdit = Date.UTC(edit.data);
    const formatYmd = date => date.toISOString().slice(0, 10);

    console.log(formatYmd(new Date(edit.data)));
    
    document.getElementById('name').value = edit.nome;
    document.getElementById('date').value = formatYmd(new Date(edit.data));
    document.getElementById('description').value = edit.descricao;

    if(_status == "false" || _status == false) {
        document.querySelector("#inactive").checked
    } else if(_status == "true" || _status == true) {
        document.querySelector("#active").checked
    }
    window.location.href = `http://localhost:3000/src/pages/home.html#editLink`;
    
    editMode = true;
    documentEdit = edit
    console.log(editMode)
    $editMode(edit)
}