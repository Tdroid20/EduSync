"use strict";
class Person {
    constructor(Name, Address, CPF) {
        this.name = Name;
        this.address = Address;
        this.cpf = CPF;
    }
}
class Student extends Person {
    constructor(Name, Address, CPF, Classe, Shift) {
        super(Name, Address, CPF);
        this.classe = Classe;
        this.shift = Shift;
    }
    manha(array) {
        let ArrayStudents = array.filter(x => x.shift == 'manha');
        console.log(...ArrayStudents);
    }
    tarde(array) {
        let ArrayStudents = array.filter(x => x.shift == 'tarde').join("\n");
    }
}
let Students = [];
let Students2 = [];
const InsertStudent = () => {
    let name = `Teu Pai De Calsinha`;
    let address = `Rua das Locuras`;
    let cpf = `123.456.789.10`;
    let classe = `2003`;
    let shift = `manha`;
    let name2 = `Teu Pai De Calsinha`;
    let address2 = `Rua das Locuras`;
    let cpf2 = `123.456.789.10`;
    let classe2 = `2003`;
    let shift2 = `tarde`;
    for (let i = 0; i < 5; i++) {
        Students[i] = new Student(name, address, cpf, classe, shift);
        console.log(i);
    }
    Students[0].manha(Students);
    /* for(let i = 0; i < 5; i++) {
        Students2[i] = new Student(name2, address2, cpf2, classe2, shift2);
        Students[i].tarde(Students2)
    } */
};
InsertStudent();
