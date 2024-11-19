// Primitive

// 7 types: String, Number, Boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n




// reference (non-primitive)

//Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof isLoggedIn);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let myYoutubeName = "kanakdotcom"

let anotherName = myYoutubeName
anotherName = "chaiAurCode"


console.log(myYoutubeName);
console.log(anotherName);

let user1 = {
    email: "kanak@google.com" ,
    upi: "kanak@ybl"
}
let user2 = user1

user2.email = "khushboo@google.com"

console.log(user1.email);
console.log(user2.email);



