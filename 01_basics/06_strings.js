const name = "Prashant Sharma"

const repoCount = 50

console.log(name + repoCount +"Value"); // Old  Way of Doing things outdated

console.log(`Hello my name is ${name} and  my repoCount is ${repoCount} `);  // Backticks string interpolation

// Backticks are near 1 near tilde sign

const gameName = new String('Prashant_Sharma') // Declaration of String
//  key value way

console.log(gameName[0]); //P
console.log(gameName.__proto__); // gives object empty

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // Give char at second position
console.log(gameName.indexOf('t')); // Gives index

const newString = gameName.substring(0,4)  // last Value is not included
// want Obey Negative Value

console.log(newString);

const anotherString = gameName.slice(-8,4)  // Can give Negative Values 
console.log(anotherString);

const newStringOne = " Prashant "
console.log(newStringOne);
console.log(newStringOne.trim()); // Trims Starting and Ending Spaces
// works on whitespace and line Terminators

const url = "https://Prashant.com/prashant%20Sharma"

console.log(url.replace('%20', '-'));

console.log(url.includes('handsome'));  // false

console.log(gameName.split("_"));








