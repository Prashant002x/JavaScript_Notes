// From Date jan 1  1970

// Dates

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString);
// Mon Jan 29 2024 02:37:03 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());  //Mon Jan 29 2024
console.log(myDate.toLocaleString());//29/1/2024, 2:40:10 am

console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  // Months Starts with 0 in JS

let myCreatedDate = new Date("2023-01-14")//YYYY-MM-DD We  Don't Follow this in india we use DD-MM-YYYY

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()  // Quizes and Etc

console.log(myTimeStamp); // Millisecond

console.log(myCreatedDate.getTime()); // myCreatedDate A Object 
// For comparing

console.log(Date.now()); // Millisecond
// For Second / 1000   but.999

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay);  // Object can  be getDate
//getMonth is also a thing getMonth() +1

newDate.toLocaleString('default',{
    weekday : 'long', // Customize properties
   timeZone:"Asia/Kolkata"  //have to search on google for this
}); // ctrl + space  for seeing properties
















