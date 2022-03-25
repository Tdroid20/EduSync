"use strict";
class User {
    constructor(Email, Password) {
        this.email = Email;
        this.senha = Password;
        this.admin = false;
    }
    isAdmin() {
        if (this.admin === true) {
            console.log(`O usuario é um admin`);
        }
        else {
            console.log(`O usuario não é um admin`);
        }
    }
}
class Admin extends User {
    constructor(Email, Password) {
        super(Email, Password);
        this.admin = true;
    }
}
const user1 = new User(`emailExistente@gmail.com`, "senha");
user1.isAdmin();
