// for of loop

// Array Specific 
// ["","",""]
// [{},{},{}]



const arr= [1 , 2, 3, 4, 5, 6, 7, 8]

for (const num of arr) {   // This object is not object of javascript
    
    console.log(num);

}

const greetings = "Hello World" 
for ( const greet of greetings) {
    console.log( ` Each Char is ${greet}`)
}

// Maps in Javascript


const map =new Map()

map.set('IN' ,"INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('FR', "Frame")

console.log(map);

for (const key   of map) {
    console.log(key); // key and value goes into key only  
    // Can use const [key ,value ] of map for using key and value differently

}

for (const [key,value] of map) {

    console.log(key ,':- ', value );
    
}

const myObject = {
    'game1' : 'NFS',
    'game2':'SpiderMan'
}

// for (const [key,value] of myObject) {

//     console.log()     // Objects are not iteratable
    
// }


// Maps Are Iterable  
// For in Doesn't work for maps 
// No Error but no Output
