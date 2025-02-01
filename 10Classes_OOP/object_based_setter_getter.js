const User = {
    _email: 'tanveer@Apple.com',
    _password: 'abctanveerInApple',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value) {
        this._password = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);