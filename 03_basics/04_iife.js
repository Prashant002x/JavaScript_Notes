// Immediately Invoked Function Expressions (IIFE) 

// function chai() {
//     console.log('DB Connected');
// }
// chai()


// (function chai(){  // Named IIFE
//     console.log('DB Connected');
// })()


// () Defination and second is execution
// Problem with global scope pollution 
// to remove it we use IIFE

// Convert it to Array Function

( ()  =>  {
    console.log('DB Connected Two ');
}) (); // We use Semi colon  to end connection otherwise editor uses semicolon in this place

(function() {
    // This is the IIFE
    var localVariable = "I'm local!";
    console.log(localVariable);
})();  // The parentheses at the end immediately invoke the function


( (name)  =>  {
    console.log(`DB Connected Two ${name}`);
}) ('Prashant Sharma')

// We are writing two IIFE WE use ; in first IIFE
