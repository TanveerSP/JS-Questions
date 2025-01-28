class User {
    constructor(username){
        /* first username is variable */  
        this.username = 
        username  /* and this seconde is parameter */
    }
    logMe() {
        console.log(`User name: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const veer = new User('veer');

// console.log(veer.createId());

class Teacher extends User {
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.logMe());