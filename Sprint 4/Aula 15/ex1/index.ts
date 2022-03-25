
class User {

    email: string;
    senha: string;
    admin: boolean

    constructor(Email: string, Password: string) {
        this.email = Email;
        this.senha = Password;
        this.admin = false
    }

    isAdmin() {
        if(this.admin === true) {
            console.log(`O usuario é um admin`)
        } else {
            console.log(`O usuario não é um admin`)
        }
    }
}

class Admin extends User {
    

    constructor(Email: string, Password: string) {
        super(Email, Password);
        this.admin = true

    }
}

const user1 = new User(`emailExistente@gmail.com`, "senha")
user1.isAdmin()

