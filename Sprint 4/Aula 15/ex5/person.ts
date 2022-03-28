/* 
=======================// highframe.tech //===================================
*/
interface BornSetup {
    day: number;
    month: number;
    year: number
}

class Person {
   public name: string;
   private born: BornSetup;
   public height: number;
    constructor(_name: string, _born: BornSetup, _height: number) {
        this.name = _name;
        this.born = _born;
        this.height = _height;

    }
    print(data: string) {
        if(data == 'all') {
            console.log(`Nome: ${this.name}\nData de Nascimento: ${this.born.day}/${this.born.month}/${this.born.year}\nAltura: ${this.height.toString().replace(".", ",")}\n`)
        } else if(data == 'name' || data == 'nome') {
            console.log(`Nome: ${this.name}`)
        } else if(data == 'born' || data  == 'nascimento') {
            console.log(`Data de nascimento: ${this.born.day}/${this.born.month}/${this.born.year}`)
        } else {
            console.log(`Altura: ${this.height.toString().replace(".", ",")}`)
        }

    }

    calcYears() {
        let _born = this.born
        let date: Date = new Date();
        let yearActual = date.getFullYear();

        let yearsOld = yearActual - _born.year;
        console.log(yearsOld)
    }

    get Born(): any {
        return this.born
    }

    set Born(value: BornSetup) {
        this.born = value
    }

}

let person = new Person(`Tdroid`, {day: 20, month: 1, year: 2006}, 1.90);
person.calcYears()
person.print('all')
/* 
==========================// powered by Tdroid 2.0 //========================
*/