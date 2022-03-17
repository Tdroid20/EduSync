const nicknameGet = document.getElementById('nickname');
const playerGet = document.getElementById('player');
const type_intervalGet = document.getElementById('interval');
const startGet = document.getElementById('start');
let nickname;

// opções de repetição
let types_interval;

nicknameGet.addEventListener('input', () => {
    nickname = nicknameGet.value;
    if(nicknameGet.value.length >= 1) {
        playerGet.innerHTML = `<strong>${nicknameGet.value}</strong>`;
    } else {
        playerGet.innerHTML = `<strong>Jogador</strong>`;
    }
    console.log(nickname);
})



const statusText = document.getElementById('status');

const statusValue = startGet.value == true ? false : true ;
let currentNumber;

const startAndStop = () => {
    // types interval
    if(type_intervalGet.value == 1) {
        types_interval = 10;
    } else if(type_intervalGet.value == 2) {
        types_interval = 100;
    } else {
        types_interval = 200;
    }
        const divination = (max, min) =>  Math.floor(Math.random() * (max - min) + min);
    currentNumber = divination(types_interval, 1);
    console.log(currentNumber);
    alert(`Seja bem Vindo ao jogo ${nickname}`);
}

let tryNumCh = 3

if(tryNumCh <= 0) {
    tryNumCh = 3;
    alert(`${nickname} Suas chances acabou`);
}

const playGet = document.getElementById('play');
const gameInputGet = document.getElementById('game');
const tryShow = document.getElementById('tryNum');
const uperLevel = document.getElementById('uperLevel');
const insertButtonTag = document.getElementById('st1')

//Infos game 

const restart = () => {
    return window.location.reload();
}

const gameOn = () => {
    if(tryNumCh == 0) {
        let reset = confirm(`Seu numero de tentativas acabou. Deseja resetar?`)
        if(reset == true) {
            return window.location.reload();
        } else {
            return alert(`Você possuí ${tryNumCh} tentativas`)
        }
    }
    let Level;
    let gameInput = gameInputGet.value
    if(currentNumber > gameInput) {
        alert(`${nickname} O Numero é maior.`)
        Level = `Maior`
        tryNumCh--
    } else if(currentNumber < gameInput) {
        alert(`${nickname} O Numero é menor`)
        Level = `Menor`
        tryNumCh--
    } else {
        alert(`Parabéns ${nickname}, você conseguiu adivinhar!`)
        insertButtonTag.innerHTML = ``
        insertButtonTag.innerHTML = `<button id="play" onclick="restart()">Recomeçar</button>`

    }
    if(Level == undefined) {
        return uperLevel.innerHTML = `<p>Parabéns ${nickname}, você conseguiu adivinhar!</p>`
    }
    uperLevel.innerHTML = `<p>O numero é <strong>${Level}</strong></p>`
    tryShow.innerHTML = `<p>Você possuí <strong>${tryNumCh}</strong> tentativas restantes</p>`
}