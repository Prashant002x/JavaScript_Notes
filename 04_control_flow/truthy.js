const userEmail = "Pras@gmail.com"

if(userEmail) {
    console.log("Got the Useer Email");
} else {
    console.log("Don't have User Email");
}

// If empty String  else condition
// EMpty Array IF condition


// Rul :  Truthy Values and Falsy Values


//falsy Values
// false , 0 ,-0 , BigInt 0n ,"" ,null ,undefined ,NaN


// Truthy Values
// Everything that is not falsy  
// "0" , 'false' ," " // space ,[] //empty array , {} empty object
// function(){}  // empty function 


//  check is array is empty
//  if(userEmail === 0) {
//     console.log("Array is empty") 
//  }

// const empytObj = {}

// if (Object.keys(emptyObj).length === 0 ){
//     console.log("Object is Empty");
// }

// Web browser

// False == 0 // false
//false =''  // true

 // 0 ==''
 // true


//  Nullish Coalescing Operator (??) : null Undefined
 //Safety check for Null Value We get /
// Some Feature May not work  with NULL

 let val1;
//  val1 = 5 ?? 10 
//  val1 = null ? 10  // 10 

//  val1 = undefined ?? 15  // 15 

// val1 = null ?? 10 ?? 15  // 10

 console.log(val1); // 5


 //Terniary Operator 

 //condition ?  true  : false

 const iceTeaPrice  = 100
 iceTeaPrice >= 80 ? console.log("Less than 80 ") : console.log("More than 80 ")


