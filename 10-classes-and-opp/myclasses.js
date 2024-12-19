// ES6

class user {
    constructor(username , password, email) {
        this.username = username;
        this.password = password;
        this.email = email
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


const kanak = new user ("kanak" , "123", "kanak@gmail.com")
console.log(kanak.encryptPassword());
console.log(kanak.changeUsername());

// behind the scenes

function User(username , password, email) {
        this.username = username;
        this.password = password;
        this.email = email
}

User.prototype.encryptPassword = function (params) {
    return `${this.password}abc`
}
User.prototype.changeUsername = function (params) {
    return `${this.username.toUpperCase()}`
}

const vaibhav = new user ("vaibhav" , "123", "vaibhav@gmail.com")
console.log(vaibhav.encryptPassword());
console.log(vaibhav.changeUsername());
