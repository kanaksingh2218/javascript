// let myName = "kanak      "
// let myChannel = "chaiaurcode"
// console.log(myName.trueLength);


myHeros = ["thor", " spiderman"] 

let heroPower = {
    thor : "hammer",
    spiderman : "sling"
}
Object.prototype.kanak = function () {
  //  console.log(`kanak is present in all object`); 
}

Array.prototype.heyKanak = function (params) {
  //  console.log("kanak says hello");
}

myHeros.heyKanak()
 heroPower.kanak()
// heroPower.heyKanak()


// * INHERITANCE


const user={
    name: "user",
    userId : "user@gmail.com"
}
const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : false
}
const TAsupport = {
    makingAssingment : "Js assingment",
    fulltime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = user

// Modern Syntax
Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "chaiaurcode          "

String.prototype.trueLength = function (params) {
    console.log(this);
    console.log(`True length ${this.trim().length} `);
}
anotherUsername.trueLength()
"kanak".trueLength()
"vaibhav".trueLength()