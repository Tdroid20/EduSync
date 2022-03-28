"use strict";
class Person {
    constructor(_name, _born, _height) {
        this.name = _name;
        this.born = _born;
        this.height = _height;
    }
    print(data) {
        if (data == 'all') {
            console.log(`Nome: ${this.name}\nData de Nascimento: ${this.born.day}/${this.born.month}/${this.born.year}\nAltura: ${this.height.toString().replace(".", ",")}\n`);
        }
        else if (data == 'name' || data == 'nome') {
            console.log(`Nome: ${this.name}`);
        }
        else if (data == 'born' || data == 'nascimento') {
            console.log(`Data de nascimento: ${this.born.day}/${this.born.month}/${this.born.year}`);
        }
        else {
            console.log(`Altura: ${this.height.toString().replace(".", ",")}`);
        }
    }
    calcYears() {
        let _born = this.born;
        let date = new Date();
        let yearActual = date.getFullYear();
        let yearsOld = yearActual - _born.year;
        console.log(yearsOld);
    }
    get Born() {
        return this.born;
    }
    set Born(value) {
        this.born = value;
    }
}
let person = new Person(`Tdroid`, { day: 20, month: 1, year: 2006 }, 1.90);
person.calcYears();
person.print('height');
