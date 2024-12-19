class user {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(` Username :${this.username}`);
        
    }

   static createId(){
        return `123`
    }
}

const kanak =  new user ('kanak')
//console.log(logMe.createId());


class Teacher extends user{
constructor (username, email){
super(username)
this.email = email
}
}

const iphone = new Teacher("iphone" , "iphone@gmail.com")
console.log(iphone.createId())