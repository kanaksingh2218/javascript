function SetUSerName(userName) {
    // complex DB calls
    this.userName = userName
    console.log("called");
    
}

function createUSer(userName , password , email) {
   SetUSerName.call(this ,userName) 
    
    this.password = password
    this.email= email
}

const kanak = new createUSer ("chai" , "1234" , "kanak@fb.com")
console.log(kanak);
