// #Primitive Data Types

// There are 7 primitive data types in JavaScript: String, Number, Boolean, null, undefined, Symbol, and BigInt.

const score = 100; // Number data type
const scoreValue = 100.3; // Number data type

const isLoggedIn = false; // Boolean data type
const outsideTemp = null; // null data type

let userEmail; // undefined data type

const id = Symbol('123'); // Symbol data type (unique identifier)
const anotherId = Symbol('123'); // Another Symbol with the same description but not equal

// console.log(id === anotherId); // Outputs: false because Symbols are always unique

const bigNumber = 23342423343525332n; // BigInt data type, denoted by 'n' at the end for large numbers

// JavaScript automatically uses BigInt if a Number is too large

// Reference Types (Non-Primitive)

// Array, Objects, Functions

const heroes = ["Shaktiman", "Naagraj", "Doga"]; // Array

let myObj = { // Object with key-value pairs in curly braces
    name: "Prashant",
    age: 22,
};

const myFunction = function() { // Function object
    console.log("Hello World");
};

console.log(typeof myFunction); // Outputs: function, but called a function object

// See the Screenshot Same Name


// +++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primitive), Heap (Non-Primitive)

let myYouTubeName = "prashantsharma"; // String data type

let anotherName = myYouTubeName; // Copying the value, not referencing
anotherName = "chaiaurcode"; // Changing the copied value

console.log(myYouTubeName); // Outputs: prashantsharma, as it's a separate copy
console.log(anotherName); // Outputs: chaiaurcode

let user = { // Object with properties
    email: "user@gmail.com",
    upi: "user@ybl",
};

let user2 = user; // Reference to the same object in memory

user2.email = "PrashantSharma@google.com"; // Modifying the email property of user2

console.log(user.email); // Outputs: PrashantSharma@google.com, as it refers to the same object
console.log(user2.email); // Outputs: PrashantSharma@google.com, due to the reference to the same object





















