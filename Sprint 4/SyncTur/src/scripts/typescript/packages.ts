import fetch from 'node-fetch';

let pack: any[] = [];

const consult = () => {
    let $url = `https://62361b7feb166c26eb2f488a.mockapi.io/pacotes`;

    fetch($url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
        let resultConvert: any = data;
        let result: any[] = resultConvert;

        for (let i = 0; i < result.length; i++) {
            pack[i] = result[i]
            console.log(pack[i])
        }
        packagesLoad()
    })
}

consult()

const packagesLoad: any = () => {
    const div: any = document.getElementById('packagesList');
    let divInsert = ``;

    for (let i = 0; i < pack.length; i++) {
        const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul","ago","set","out","nov","dez"];
        let data = new Date(pack[i].data);
        let dataFormatada = (+ (data.getDate() + 1 ) + '/' + meses[(data.getMonth())] + '/' + data.getFullYear());
        
        divInsert += `<div class="card" id="${pack[i].id}">
        <p class="packageTitle">${pack[i].nome}</p>
        <p class="packageDesc">${pack[i].descricao}</p>
        <br>
        <p class="packageDate">Data da viagem: ${dataFormatada}</p>
        <div class="btn">
            <button class="packageBtn edit" onclick="$edit(${i})">Editar</button>
            <button class="packageBtn delete" onclick="$delete(${i})">Excluir</button>
        </div>
        </div>`
        div.innerHTML = divInsert;
    }
}


interface Ipacks {
    nome: string;
    descricao: string;
    data: Date
    status: boolean;
    id: number;
}

const $register = () => {
    const inputName: any = document.getElementById('name');
    const inputDate: any = document.getElementById('date');
    const inputDesc: any = document.getElementById('description')
    const inputRadio: any = document.querySelector('input[name="bah"]:checked');

    let _name: string = inputName.value;
    let _date: any = inputDate.value;
    let _desc: string = inputDesc.value;
    let _status: boolean = inputRadio.value;
    
    const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    let data = new Date(_date);
    let dataFormatada = (data.getFullYear() + '-' + (data.getMonth() +1) + '-' + (data.getDate() + 1));


    let dataAtual = new Date();
    let dataAtualFormatada = (dataAtual.getFullYear() + '-' + (dataAtual.getMonth() +1) + '-' + (dataAtual.getDate()));
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


    let newPackage: Ipacks = {
        nome: _name,
        descricao: _desc,
        data: _date,
        status: _status,
        id: pack.length + 1
    }
    console.log(newPackage);
    pack.push(newPackage);
    packagesLoad();

    // zerando inputs

    let resName: any = document.getElementById('name');
    let resDate: any = document.getElementById('date');
    let resdesc: any = document.getElementById('description');
    let resStatus: any = document.getElementById('inactive');
    resName.value = '';
    resDate.value = '';
    resdesc.value = '';
    resStatus.checked = true;

    window.location.href = `http://localhost:3000/src/pages/home.html#${pack.length}`
} 

const $delete = (indice: number) => {
    pack.splice(indice, 1)
    packagesLoad()
}


const $edit = (id: number) => {
    const inputName: any = document.getElementById('name');
    const inputDate: any = document.getElementById('date');
    const inputDesc: any = document.getElementById('description');
    const inputRadio: any = document.querySelector('input[name="bah"]:checked');
    
    let edit: any = pack.filter(x => x.id == id);

    let modfy = edit[0]
    let _name: string = inputName.value;
    let _date: string = inputDate.value;
    let _desc: string = inputDesc.value;
    let _Status: boolean = inputRadio.value;
    
    _name = modfy.nome;
    console.log(_name)
    _date = edit.data;
    _desc = edit.descricao;
    _Status = edit.status;
    
    const meses = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
    let data = new Date(_date);
    let dataFormatada = (data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + (data.getDate() + 1));
    let dataAtual = new Date();
    let dataAtualFormatada = (dataAtual.getFullYear() + '-' + (dataAtual.getMonth() + 1) + '-' + (dataAtual.getDate()));

    

    if(_name === '')
        return alert('O nome do pacote não foi informado');
    if(_date === '') {
        alert('A data de viagem não foi informada');
    }
    if(_desc === '') {
        alert('A descrição não foi informada');
    }
    if(dataFormatada < dataAtualFormatada)
        return alert(`Você informou uma data passada.`);




        window.location.href = `http://localhost:3000/src/pages/home.html#main`
}

/* 

const $edit = (id) => {
    const inputName = document.getElementById('name');
    const inputDate = document.getElementById('date');
    const inputDesc = document.getElementById('description');
    const inputRadio = document.querySelector('input[name="bah"]:checked');
    
    let edit = pack.filter(x => x.id == id);
    edit = edit[0];
    let _name = inputName.value;
    let _date = inputDate.value;
    let _desc = inputDesc.value;
    let _Status = inputRadio.value;
    console.log(edit.data)
    let DataEdit = new Date(edit.data);
    console.log(DataEdit)
    let dataFormatadaEdit = (DataEdit.getFullYear() + '-' + (DataEdit.getMonth() + 1) + '-' + (DataEdit.getDate() + 1));
    
    document.getElementById('name').value = edit.nome;
    document.getElementById('date').value = dataFormatadaEdit;
    document.getElementById('description').value = edit.descricao;
    document.querySelector('inctive') = edit.status;
    window.location.href = `http://localhost:3000/src/pages/home.html#main`
    
} */