const user  = {

    username: "Prashant",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , Welcome to Website`);
        // console.log(this);
    } // Current Context using this
    // this refers to current context  // Every thing about object
};
// user.welcomeMessage();
// user.username = "Hitesh";
// user.welcomeMessage(); 

// this talks about current values
// console.log(this);// {}


// Objects in browser are window object

// function chai() {
//     let username  = "Prashant "
//     console.log(this); // This inside function gives a lot of data
//     console.log(this.username); // Undefined inside Function only used inside objects

// }
// chai()


// const chai = function () {
//     let username  = "Prashant "
//     console.log(this.username); // Undefined
// }
// chai()

// const chai = () => { // Arrow  function formed  using =>
//     let username ="Prashant Sharma"
//     console.log(this.username); // Undefined
//     // only this will empty {} parenthesis

// }
// chai()

// What is Arrow Function 
// () => {

//}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// Implicit Return below
//const addTwo = (num1, num2) => num1 +num2
// No need to write return  without  parenthesis  
// console.log(addTwo(3, 4))

const addTwo = (num1, num2) => (num1 +num2 )
// If uses Round brackets no need to write return keyword
//else write return keyword
console.log(addTwo(3, 4))


// Use of Parenthesis
// Returning object
// const addTwo = (num1 ,num2 ) => ({username: "Prashant"})
// console.log(addTwo(3, 4))


// const myArray = [2,5, 3, 7, 8] 
// my