const descriptor = Object.getOwnPropertyDescriptor(Math , "PI")
//  console.log(descriptor);
 
//  console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);

const Chai = {
    name : "gingerChai",
    price : "250",
    isAvailable : true,

    orderChai:function (params) {
        console.log("chai nahi bani");
        
    }
}
console.log(Object.getOwnPropertyDescriptor(Chai, "name",));
Object.defineProperty(Chai, "name", {
   // writable: false,
    // configurable: false
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(Chai, "name"));
for (let [key , value] of Object.entries (Chai)){
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
        
    }
}

