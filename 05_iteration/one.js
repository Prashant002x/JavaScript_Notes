//for 


// for (let i = 0; j < myArray.length; index++) {
//     const element = myArray[index];
// } // Syntax


// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if ( element ==5) {
//         console.log("5 is Bes number");
//     }
//     console.log(element);
// } // Ctrl +D


// for (let i = 1; i <= 10 ; i++) { // Nested Loop
//     console.log(`Outer Loop ${i}`);
//     for (let j = 1; j <=10; j++) {
//         const element = j;
//         // console.log(`Inner Loop ${j} and Outer Loop ${i}`);
//         console.log( i + '*' + j + '=' + i*j);
//     }
    
// }


// let myArray = ["Flash " , "batman " ,"superman "]
// console.log(myArray.length);
// for (let index = 0; index < myArray.le ngth; index++) {
//     const element = myArray[index];
//     console.log(element);
//     // Undefined after out of bound 
// }


// Keywords 
// Break  and continue

for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log('Detected 5');
        break;
    }
   console.log(`value of i is ${index}`);
    
}
 
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log('Detected 5');
      continue;
    }
   console.log(`value of i is ${index}`);
    
}






