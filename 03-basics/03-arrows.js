const user = {
username : "kanak",
price: "9999",
 welcomemessage: function () {
    console.log(`${this.username} ,welcome to website`);
    console.log(this);
    
}
}

// user.welcomemessage()
// user.username = "vaibhav"
// user.welcomemessage()
// console.log(this);

// function chai(params) {
//     let username = "kanak"
//     console.log(this.username);
    
// }
// chai()

// const chai = function chai(params) {
//     let username = "kanak"
//     console.log(this.username);
    
// }
// chai()

// 

// () => {}  //arrow function syntax

// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }
// console.log(addtwo(4 , 8));


// const addtwo = (num1 , num2) =>   num1 + num2

const addtwo = (num1 , num2) =>   ({username: "kanak"})
console.log(addtwo(4 , 8));

