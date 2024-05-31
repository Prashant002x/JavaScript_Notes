// console.log("P");
// console.log("R");


// function sayMyName() {  // Defination
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");

// }

// sayMyName() // Execution
// sayMyName()  -->Reference

function addTwoNumber (number1 , number2) { // Parameters

//    console.log(number1 + number2) 
//    let result = number1+ number2
//    return result
//    // Nothing Can bee Printed After Return

    return number1+ number2
}

const result = addTwoNumber(3, 4) // 7  // Arguments
// Begineer Mistake
// console.log("Result ", result); // Undefined if onlu console

addTwoNumber(3, "4") // 34
addTwoNumber(3, "a")// 3a
addTwoNumber(3, null) //3

function loginUserMessage(username ="SaM // Default Value ") {
    // if(username ===undefined){
    //     console.log("Please Enter a User name");
    //     return 
    // }  used is username is undefined
    // Undefined and "" strings are considered false
    return `${username} just logged in`
}
// console.log(loginUserMessage("Prashant"))
// console.log(loginUserMessage()) //Undefined Logged in


function calculateCartPrice(val1, val2 ,...num1) {  //... Rest Operator or Spread Operator
    return num1
}

console.log(calculateCartPrice(200, 400 , 500 , 2000))

const user = {
    username: "Prashant Sharma",
    price: 122 // Type safety should be checked  is prices it will say undefined
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username}  and price is ${anyobject.price}`);
}
 
handleObject(user) 
handleObject({
    username: "NAMAA",
    price: 3344
})

const myNewArray = [200, 400, 100 ,600 ]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400 , 100, 600]));














