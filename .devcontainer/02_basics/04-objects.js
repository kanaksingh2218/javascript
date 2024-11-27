// const tinderUser = new Object ()

const tinderUser = {}
tinderUser.id = "kanak2218"
tinderUser.name = "kanak singh"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularuser ={
    email: "kanaksingh2218gmail.com" ,
        fullname : {
            firstname : "kanak",
            lastname: "singh"

        }
    }
// console.log(regularuser.fullname);

const obj1 = {1: "a" , 2:"b" ,  3:"c"}
const obj2 = {4: "d" , 5:"e" ,  6:"f"}
const obj3 = {7: "g" , 8:"h" ,  9:"i"}

const obj4 = {...obj1, ...obj3}
// const obj4 =  Object.assign( obj1 , obj2, obj3);
// console.log(obj4);

const users = [
    {
        id : "1",
        email : "2"
    } ,
    {
        id : "1",
        email : "2"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedOut'));


const course = {
    courseName : "js in hindi" ,
    price : "999" ,
    courseInstructor : "hiteshSir"
}

// console.log(course.courseInstructor);

const {courseInstructor} = course
console.log(courseInstructor);



