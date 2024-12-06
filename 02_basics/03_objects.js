//singleton = bulid by constructer
Object.create //singleton

// objects literal
const mySym = Symbol("key1")


const JsUser = {
    name : "Kanak" ,
    "full Name" : "KanakSingh",
    [mySym] : "mykey1" ,
    age : 24 ,
    email : "kanaksingh276@gmail.com" ,
    isLoggedIn : false ,
    lastLoginDays : ["monday" , "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"])
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "kanaksingh@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "kanaksingh@accenture.com"

// console.log(JsUser); 

JsUser.greetings = function () {
    console.log("hello js user");
}

JsUser.greetingsTwo = function () {
    console.log(`hello js user, ${this["full Name"]}`);
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());




