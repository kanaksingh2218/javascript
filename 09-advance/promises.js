
const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB calls, cryptograhy , network

    setTimeout(() => {
        // console.log("Async task completed");
        resolve(
        )
    }, 3000);
})

promiseOne.then(function () {
    // console.log("Async Consumed");
    
})

new Promise((resolve, reject) => {
    // console.log("Async 2 task");
    resolve()
},1000).then(function () {
    // console.log("Async 2 completed");
    
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve({username : "Kanak" , email : "kanaksingh2218@gmail.com"})
        },1000)
})
 
promiseThree.then(function(user) {
    // console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
       if (!error) {
        resolve({username : "kanak", password: "kanak"})
       } else {
        reject("ERROR : Something went wrong")
       }
        
    }, 1000);
})
promiseFour.then(function (user) {
    // console.log(user);
     return user.username;
}).then(function (username) {
    // console.log(username);
}).catch(function (error) {
    // console.log(error); 
}).finally(function () {
    // console.log("Promise is either rejected or resolved");
    
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
       if (!error) {
        resolve({username : "Javascript", password: "kanak"})
       } else {
        reject("ERROR : JS went wrong")
       }
        
    }, 1000);
})
async function consumePromiseFive(){
   try {
    const response = await promiseFive;
//    console.log(response);
   } catch (error) {
    // console.log(error);
    
   }
   
}
consumePromiseFive()
async function getAllUsers(params) {
  const response=  await fetch("https://api.github.com/users/kanaksingh2218")
  const data = await response.json()
  console.log(data);
  
}
getAllUsers().catch((error)=> console.log("ERROR");
)





const p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
       resolve("promise value resolved")
    },5000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
       resolve("promise value resolved")
    },10000)
})
// function getData(params) {
// // JS engine do not wait for promise to be resolved

//     p.then((res) => console.log(res));
//     console.log("Namaste");
// }
//  getData()

//await can be used only  inside the async function
// async function handlePromises() {
//     console.log("Hello world");
//     //JS engine waits promise to be resloved
//    const val = await p1
//     console.log("Namaste 1");
//    console.log(val);

//    const val2 = await p2
//    console.log("Namaste 2 ");
//   console.log(val2);
// }
// handlePromises()


//  p.then (function (getData) {
//     console.log(getData); 
//  })

//async await function

// async function getData() {
//     return p;
// }
// const dataPromise = getData()
// //console.log(data);

// dataPromise.then((res) => console.log(res));
 

const API_URL = "https://api.github.com/users/kanaksingh2218"
async function handlePromises(params) {
    
//   try {
//     const data = await fetch(API_URL)
//   const jsonValue = await data.json()
// console.log(jsonValue);
//   } catch (error) {
//     console.log(error);
    
//   }



  //fetch() => Response.json() =>jsonValue

  const data = await fetch(API_URL)
  const jsonValue = await data.json()
console.log(jsonValue);
}
handlePromises().catch((err) => console.log(err));

