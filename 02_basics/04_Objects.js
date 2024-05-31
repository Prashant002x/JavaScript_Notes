//const tinderUser =  new Object()
const tinderUser = {}
// Doing same thing no internal difference


tinderUser.id = "123abc"
tinderUser.name = "Kale"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: { // Object inside object
        userfullname:{
            firstname:"Prashant",
            lastname:"Sharma"
        }
    }
}

console.log(regularUser.fullname);
//{ userfullname: { firsname: 'Prashant', lastname: 'Sharma' } }

console.log(regularUser.fullname.userfullname.firstname)
//Prashant
//Question Chaining using  ? used in api


const obj1  = {
    1:"a",
    2: "b"
}
const obj2 = { 3: "a", 4:"b"}

// const obj3  = { obj1 ,obj2}

const obj3 = Object.assign(obj1 , obj2)
//Combine the object without distinct sepration
//const obj3 = Object.assign({},obj1, obj2) //  If there are many objects for guarnte

// Above no change it is good to do this however

//const obj3 = {...obj1, ...obj2}
// Spreading and then storing it in obj3
console.log(obj3);

const users = [
    {

    },
    {

    },
    {

    }
]

//users[1].email // for Accessing above objects  in array of objects

console.log(tinderUser);

console.log(Object.values(tinderUser));// For Values of Objects

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));
// [ [ 'id', '123abc' ], [ 'name', 'Kale' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// 

const course = {
    coursename: "JS IN HINDI" ,
    price:"999",
    courseInstructor: "HITESH"
}

//course.courseInstructor
// Destructoring
const {courseInstructor:instructor} = course  // Easy Method for doing this
console.log(instructor); // ShortCut
//instructor is the alias name given to courseInstructor
console.log(instructor);


// const navbar = ( props.c) => {

// }
// navbar(company = "hitesh")


//API-> Json formatt
// {// this is a not a object can't be written in this way
//     name:"Prashant Sharma",  // String: string
//    " courseName":"JS in hindi",
//     "price":"Free"
// }


// APIS in array format

// [
//     {},
//     {},
//     {}
// ]

// Famous API  randomuser me TO understand it Json formatter


