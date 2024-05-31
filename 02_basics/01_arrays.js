// Arrays 

const myArr = [ 0, 1, 2, 3, 4, 5, true ,"hitesh"]
const myHeros = ["shaktiman" , "naagraj"]

const myArr2 =  new Array(1, 2, 3, 4) // No need for Square bracket in this case
// Arrays also give properties

// arrays are resizeable and mix of differnet types of  data types

// console.log(myArr[1]);
// Copying the array does in shallow copyy 

// Refernce are same



// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(100)  // For Adding it in front of Array
// Shift the rest of values

myArr.shift()// Delete the last Element of the array
// console.log(myArr.includes(9)); // Questionarie operation
// give Boolean
// indexOf(9)
// console.log(myArr.indexOf(3));

const newArr = myArr.join()



// console.log(myArr); // In Array format
// console.log(newArr); //  converted into string
// console.log(typeof newArr);


// slice , splice 

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) 
// Return Section of Array 3 is not Included

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1, 3) // Portion is Taken
console.log(myn2);
console.log("C", myArr); // Original Array changes











