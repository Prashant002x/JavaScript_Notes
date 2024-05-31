const score = 400
console.log(score);

const balance = new Number(100)

 console.log(balance);


 console.log(balance.toString().length);

 console.log(balance.toFixed(2)); // Important Precision Value

 const otherNumber = 123.8966;

 console.log(otherNumber.toPrecision(4));
 

 const hundreds = 1000000
 console.log(hundreds.toLocaleString()); 
 // According to US Standard
 // Still Vs code showing indian Value for indian value use ('en_IN')
 //In that Case


 // ++++++++++++++++++++ Maths ++++++++++++++++++++++++


 console.log(Math);  // Object
console.log(Math.abs(-4));   // absolute Value
console.log(Math.abs(4));

console.log(Math.round(4.8));
// 04_control_flow\switch.js
// Control Which upper or lower bound to consider

console.log(Math.ceil(4.6)); // choose top value

console.log(Math.floor(4.5)); // choose the bottom value

console.log(Math.min(4,5,5,6,6));
// Max is also used

console.log(Math.random());  // [0, 1]
console.log(Math.floor(Math.random()*10) + 1);

const  min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min);

console.log(Math.floor(Math.random() * (max - min + 1) + min));







