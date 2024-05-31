// let a = 10 
// const b = 20
// var c = 30 // Global Scope

//{} //  Scope

// if (true) { // Scope is in Curly Brackets only  // Block Scope
//     let a = 10 
//     const b = 20
//     var c = 30
// }


//console.log(a); // a is not defined
//console.log(b); // b is not defined
// console.log(c); // 30 is printed 


// var c = 300 // Global scope

// if(true)  {

//     c =30 // var c= 30  Same thing

// }

// console.log(c)

// let a = 300
// if(true) {
//     let a= 200
//     console.log("INNNER: ", a);
// }

// console.log("OUTER  ",a)

 //  global Scope Checked in console is differenct from scope in program


 function one() {
    const username = "Prashant Sharma"

    function two() { // this can access  username as it is global for this
        const website = "Youtube"
        // console.log(username);
    }
    // console.log(website); // Error line by line two() is not called
    two() 
 }
// Closure inner function can access outer function
 one()


 if (true) {
    const username ="Prashant Sharma"
    if( username === "Prashant Sharma") {
        const website = "Youtube"
         //console.log(username + website)
    }
    // console.log(website);  Error
 }

//  console.log(username); Error



// ***************************Interesting *************************


console.log(addone(5)) // No error
function addone(num) {
    return num + 1
}

// addone(5)

addTwo(5) // Error  Hold it in a variable  addTwo
const addTwo = function(num) { 
    return num + 2
}

// addTwo(5)