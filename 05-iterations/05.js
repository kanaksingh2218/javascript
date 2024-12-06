const coding = [  "js" , "rb", "java" , "cpp" , "py"]

// coding.forEach( function (value) {
//     console.log(value);
    
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )
// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach( printMe)

// coding.forEach( (item , index, arr)=> {
//     console.log(item , index, arr);
    
// })

const myCoding =  [
    {
        languageName : "javascript" ,
        languageFileName : "js"
    },
    {
        languageName : "python" ,
        languageFileName : "py"
    },
    {
        languageName : "java" ,
        languageFileName : "java"
    },
]

myCoding.forEach ( (item) => {
    console.log(item.languageName);
    
})