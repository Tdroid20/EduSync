"use strict";
let idActual = 0;
class Signup {
    constructor(_name, _description, _date, _status, _id) {
        this.name = _name;
        this.description = _description;
        this.date = _date;
        this.status = _status;
        this.id = _id;
    }
    Signup(vName, vData, vStatus, vDescription) {
        idActual = idActual + 1;
        let id = idActual;
    }
}
