export class User {
    public username: string;
    public email: string;
    public password: string;

    constructor() {
        this.username = '';
        this.email = ''
        this.password = '';
    }

    getWalletBalance() {
        return `${this.username} has 400Q8 Tokens`
    }
}


 