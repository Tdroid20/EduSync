interface IPackages {
    name: string;
    description: string;
    date: Date;
    status: boolean;
    id: number;
}

let idActual = 0

class Signup {
    name: string;
    description: string;
    date: Date;
    status: boolean;
    id: number;

    constructor(_name: string, _description: string, _date: Date, _status: boolean, _id: number) {
        this.name = _name;
        this.description = _description;
        this.date = _date;
        this.status = _status;
        this.id = _id;
    }

    Signup(vName: string, vData: Date, vStatus: boolean, vDescription: string) {
        idActual = idActual + 1
        let id: number = idActual

    }
}