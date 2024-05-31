const user = { 
    username: "Prashant",
    loginCount: 8,
    signedIn :true,

    getUserDetails:function(){
        //console.log("GOT User Details From Database");
        console.log( `Username : ${this.username}`); //  Execution context this 
        console.log(this);  // give all memory Values

    }

}// Object Literal


console.log(user.username);
//console.log(user.getUserDetails());
console.log(this); // Gives {} in global context currently

// in browser this will windows context 

//  let myArray =  [1,2,3,4]
// undefined
// myArray  //  Methods in this

// Constructor Function

const promiseOne = new Promise()
const date = new Date()
  // new keyword  is used to make new object can be said as constructor 


 function User(username ,loginCount,  isLoggesIn) {
    this.username = username
    this.loginCount = loginCount;
    this.isLoggesIn  = isLoggesIn

    // All the above are values or properties
    // We can also define function

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
    // If I don't Return this  it is implicity defined
 }

const userOne = User("Prashant",50 , true);
const  userTwo = User("Hitesh " ,100 ,false);
// Above userTwo will overwrite values of userOne and  
// I think it returns reference of the memory not the memory
// new keyword constructor function gives new instance
console.log(userOne);
// new Created empty Object

console.log(userOne.constructor) 
// reference about contructor 
// Will give function :User //  User is Function name

// Instance of 







