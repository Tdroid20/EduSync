"use strict";
class Animals {
    constructor(Porte, Idade, Peso) {
        this.porte = Porte;
        this.idade = Idade;
        this.peso = Peso;
    }
}
class Child extends Animals {
    constructor(Porte, Idade, Peso, Type) {
        super(Porte, Idade, Peso);
        this.felineType = Type;
    }
    AfiarGarras() {
        console.log(`Vem pra cima meu irmão!`);
    }
    Dormir() {
        console.log(`Sonin`);
    }
}
let felines = [];
const InsertFeline = () => {
    let idade = 13;
    let peso = 41;
    let porte = 'baixo porte';
    let felineType = `Gatinho`;
    for (let i = 0; i < 2; i++) {
        felines[i] = new Child(porte, idade, peso, felineType);
        felines[i].Dormir();
    }
};
InsertFeline();
