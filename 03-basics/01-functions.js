// console.log(K);
// console.log(A);
// console.log(N);
// console.log(A);
// console.log(K);

function saymyname(){
    console.log("K");
    console.log("A");
    console.log("N");
    console.log("A")
    console.log("K");
}

// saymyname() 

// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2);
// }
addTwoNumbers(45,"b")

function addTwoNumbers(number1 , number2) {
    let result = number1 + number2;
    return result
}
const result = addTwoNumbers(4 , 8)
// console.log("Result:" , result);

function loginstatus(username = "vaibhav") {
    if (username === undefined) {
        console.log("please enter your username");
        return
    }
    
    return`${username} just logged in`
}
// console.log(loginstatus("kanak"));

// console.log(loginstatus("kanak"));

function calculateCartPrice(...num1) {
    return num1
    
}
// console.log(calculateCartPrice(500 , 340 ,653));

const user = {
    username : "kanak",
    price : 199

}

function handleobject(anyobject) {
    console.log(` user name is ${ anyobject.username} , and the price is ${ anyobject.price} `)
}

handleobject(user)

const mynewarray = [ 300 , 400, 500]
function mysecondreturnvalue(getarray) {
    return getarray[2]
}


console.log(mysecondreturnvalue(mynewarray));
