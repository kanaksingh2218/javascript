class user {
    constructor(userName) {
        this.userName = userName
    }

    logMe (){
        console.log(` Username is ${this.userName}`);
    }
}

class Teacher extends user{
   constructor(userName , password , email){
      super(userName)
      this.password = password
      this.email = email
   }

   addCourse(){
    console.log(` A new courses added ${this.userName}`);
    
   }
}

const kanak = new Teacher ("kanak" , "123" , "kanak@gmail.com")
kanak.addCourse()

const vaibhav = new user ("vaibhav")
// vaibhav.addCourse()
vaibhav.logMe()
kanak.logMe()

console.log(kanak instanceof user);
