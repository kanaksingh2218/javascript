class User {
    constructor(email , password) {
        this.email = email,
        this.password = password
    }

    get password (){
         return `${this._password}kanak`
    }
     set password(value){
         this._password = value
     }
}

const kanak = new User ("k@kanak.ai", "abc")
console.log(kanak.password);
