"use strict";
class Employee {
    constructor(_firstName, _secoundName, _wage) {
        this.firstName = _firstName;
        this.secoundName = _firstName;
        this.wage = _wage;
    }
    get SecoundName() {
        return this.SecoundName;
    }
    set SecoundName(value) {
        this.SecoundName = value;
    }
    get Wage() {
        return this.wage;
    }
    set Wage(value) {
        this.wage = value;
    }
    SalarioAnual() {
        let salario = this.wage * 12;
        return console.log(`Salario Anual do ${this.firstName}: ${salario}`);
    }
}
let Richard = new Employee(`Richard`, `pereira`, 500);
let Vini = new Employee(`Vinicio`, "Santos", 9700);
let Patrão = new Employee(`Vinicio`, "Santos", 9700);
let Benjamin = new Employee(`Benjamin`, "Quadros", 1002972094);
Richard.SalarioAnual();
Vini.SalarioAnual();
Benjamin.SalarioAnual();
Richard.Wage = Richard.Wage * 1.1;
Vini.Wage = Vini.Wage * 1.1;
Benjamin.Wage = Benjamin.Wage * 1.1;
console.log(`=============================================================`);
Richard.SalarioAnual();
Vini.SalarioAnual();
Benjamin.SalarioAnual();
