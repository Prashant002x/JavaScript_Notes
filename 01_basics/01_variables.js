// Constants and Variables

const accountId = 144553;  // The value of accountId remains constant throughout the program
let accountEmail = "PrashantSharma.com";  // Mutable variable for email
var accountPassword = "12345";  // Mutable variable for password
accountCity = "Jaipur";  // Mutable variable for city (implicitly creates a global variable)
let accountState;  // Variable declared but not initialized; currently undefined

// Attempting to change the value of a constant (accountId = 2) is not allowed
accountEmail = "hhs@gmail.com";  // Updating the value of accountEmail
accountPassword = "1222e1";  // Updating the value of accountPassword
accountCity = "Delhi";  // Updating the value of accountCity

// Outputting the value of accountId using console.log
console.log(accountId);

// Displaying the values of accountId, accountEmail, accountPassword, accountCity, and accountState in a table format
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// Avoiding the use of "var" due to scoping issues; using "let" for block scope instead

/*
Prefer not to use "var" due to issues with block scope and functional scope.
There are two ways to define variables ("let" and "const"), but only one way to define constants.
Variables can be declared without assigning a value initially.
*/

// Summary:
// - Constants are declared using "const" and their values cannot be changed.
// - Mutable variables are declared using "let" or "var" and can be updated throughout the program.
// - "let" is preferred over "var" due to block scope and functional scope issues.
// - Variables can be declared without initially assigning a value, leaving them as "undefined" until assigned.
// - Use "console.log" to output values and "console.table" to display structured data in a table format.
