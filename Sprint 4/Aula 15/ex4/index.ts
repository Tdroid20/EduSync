
class Person {
    name: string;
    address: string;
    cpf: string;

    constructor(Name: string, Address: string, CPF: string) {
        this.name = Name;
        this.address = Address;
        this.cpf = CPF;
    }
}

class Student extends Person {
    classe: string;
    shift: string;

    constructor(Name: string, Address: string, CPF: string, Classe: string, Shift: string) {
        super(Name, Address, CPF)
        this.classe = Classe;
        this.shift = Shift;
    }

    manha(array: Array<Student>) {
        let ArrayStudents = array.filter(x => x.shift == 'manha')
        console.log(...ArrayStudents)
    }
    
    tarde(array: Array<Student>) {
       let ArrayStudents = array.filter(x => x.shift == 'tarde').join("\n")
    }
}

let Students: Array<Student> = []
let Students2: Array<Student> = []

const InsertStudent = () => {
    let name: string = `Teu Pai De Calsinha`;
    let address: string = `Rua das Locuras`;
    let cpf: string = `123.456.789.10`;
    let classe: string = `2003`;
    let shift: string = `manha`;
    
    let name2: string = `Teu Pai De Calsinha`;
    let address2: string = `Rua das Locuras`;
    let cpf2: string = `123.456.789.10`;
    let classe2: string = `2003`;
    let shift2: string = `tarde`;

    for(let i = 0; i < 5; i++) {
        Students[i] = new Student(name, address, cpf, classe, shift);
    }
    
    Students[0].manha(Students)
    /* for(let i = 0; i < 5; i++) {
        Students2[i] = new Student(name2, address2, cpf2, classe2, shift2);
        Students[i].tarde(Students2)
    } */

    
}

InsertStudent()