class Animals {
    porte: string;
    idade: number;
    peso: number;
    
    constructor(Porte: string, Idade: number, Peso: number) {
        this.porte = Porte;
        this.idade = Idade;
        this.peso = Peso;
    }

}

class Child extends Animals {
    AfiarGarras(): void {
        console.log(`Vem pra cima meu irmão!`);
    }

    Dormir(): void {
        console.log(`Sonin`);
    }

    felineType: string
    constructor(Porte: string, Idade: number, Peso: number, Type: string) {
        super(Porte, Idade, Peso);
        this.felineType = Type;
    }

}

let felines: Array<Child> = []
const InsertFeline = () => {
    let idade: number = 13;
    let peso: number = 41;
    let porte: string = 'baixo porte';
    let felineType: string = `Gatinho`;


    for(let i = 0; i < 2; i++) {
        felines[i] = new Child(porte, idade, peso, felineType) ;
        felines[i].Dormir();
    }
    
}

InsertFeline()

