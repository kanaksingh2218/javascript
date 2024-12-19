const user ={
    username : "kanak",
    logInCount : 8,
    userLoggedIn : true,

    getAllUsers : function () {
       // console.log("got user detail from database");
       // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

//console.log(user.username);
//console.log(user.getAllUsers());


function User(username, logInCount, userLoggedIn) {
    this.username = username,
    this.logInCount = logInCount,
    this.userLoggedIn = userLoggedIn
    // return this
}
 const userOne = new User("kanak", "12", "true")
 const userTwo = new User("vaibhav" , "22" , "false")
 console.log(userOne);
