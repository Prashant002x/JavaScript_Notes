"use strict";  // Treat all JS code as a newer version of JavaScript by the engine

// alert(3 + 3);  // We are using Node.js, not a browser

// The JavaScript Engine is typically hidden inside the browser environment.

console.log(3 + 3);
console.log("Don't do this");
// Code readability should be high.
// Original tc39.es standard writing of JavaScript is preferred over MDN.
// Variable declarations using the 'let' keyword.
let name = "Prashant";
let age = 18;
let isLoggedIn = false;

// Primitive Data Types in JavaScript:
// 1. Number: Represents numeric values, including integers and floating-point numbers.
// 2. BigInt: Represents larger numeric values beyond the normal Number range.
// 3. String: Represents textual data enclosed within quotes.
// 4. Boolean: Represents true or false values.
// 5. Null: Represents an intentional absence of any value. It is a standalone value.
// 6. Undefined: Represents a variable that has been declared but not assigned a value.
// 7. Symbol: Represents a unique and immutable data type.
// 8. Object: Represents a collection of properties (key-value pairs) and methods. Objects are used to store complex data structures and are reference types.

// Note: The 'typeof' operator returns the data type of a variable or expression.
console.log(typeof undefined);  // Outputs: "undefined" as the data type of undefined.
console.log(typeof null);  // Outputs: "object" - Note that typeof null returns "object" (a historical quirk in JavaScript).

// Difference between null and undefined:
// - Null represents an intentional absence of any value. It is typically used to indicate that a variable has no value assigned to it deliberately.
// - Undefined, on the other hand, represents a variable that has been declared but not yet assigned any value. It indicates that the variable exists but has not been initialized.

// Interview Questions:

// 1. What does "use strict"; do in JavaScript? Explain its benefits.
// Answer: "use strict"; enables strict mode in JavaScript, enforcing stricter rules for writing code, catching common programming errors, preventing accidental globals, and improving overall code quality.

// 2. Explain the difference between null and undefined in JavaScript with examples.
// Answer: 
// - Null represents an intentional absence of any value, like when a variable is deliberately set to no value.
// - Undefined indicates that a variable has been declared but not yet assigned a value, showing that the variable exists but hasn't been initialized. Example: let x; console.log(x); // Outputs: undefined

// 3. What are the primitive data types in JavaScript? Provide examples for each.
// Answer: Primitive data types in JavaScript include Number (e.g., 5), BigInt (e.g., 100n), String (e.g., "Hello"), Boolean (e.g., true), Null (e.g., null), Undefined (e.g., let x;), Symbol (e.g., Symbol("foo")), and Object (e.g., { name: "John", age: 30 }).

// 4. How does the typeof operator work in JavaScript? Provide some use cases.
// Answer: The typeof operator is used to determine the data type of a variable or expression. Example: console.log(typeof "Hello"); // Outputs: "string"

// 5. Explain the difference between let, const, and var for variable declarations in JavaScript.
// Answer: 
// - let and const are block-scoped and allow block-level declarations, whereas var is function-scoped.
// - let allows variable reassignment, const is for variables that shouldn't be reassigned, and var can lead to hoisting issues and accidental global declarations.
