let  score = true


console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score)
console.log(valueInNumber);  // Not Pure Number 
// // Still be converted
console.log(typeof valueInNumber);
// // "33" => 33
// // "33abc" => NaN
// // true => 1; false =>0

let isLoggedIn = 0
// // 1 => True 
// // 0 => False
// // "String" => True
// // "" => false 
 
let booleanIsLoggesIn = Boolean(isLoggedIn)
console.log(booleanIsLoggesIn)


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// let someNumber =33

// let stringNumber = String(someNumber) 
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ************Operations ***************
 
let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);  //Power
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = "Prashant"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);    //12
console.log(1 + "2");    //12
console.log("1" + "2");   //12
console.log("1" + 2 + 2);  //122
console.log(1 + 2 + "2"); // 32    Why ToPrimitive Ecma Script

// console.log( 3 + 4 * 5 % 3);  // No one will appreciate it Use parenthesis


console.log(true); // true
// +true =  1
// true+ == error Unexpected
console.log(+""); // 0
// "" = false

let num1 , num2 , num3
num1 = num2 = num3 = 2 + 2  // readility is more needed  than smartness

let gameCounter = 100
++gameCounter; // Prefix and Postfix
console.log(gameCounter);



















/* FOR null   object
              object 
              0
              number
    For 44aa  string
              string
              NaN
              Number
    For undefined  undefined
                   undefined
                   NaN
                   number

    For True       boolean
                   boolean
                   1
                   number

    For any string  

*/