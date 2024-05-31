// in web browser


// const newHero = [ 'Hulk ', "spiderman"] 
// // undefined

// newHero
//     values 
//     0: Hulk
//     1: Spiderman
//     length: 2
//     then [[Protoype]] : Array(0)

//     Prototyple Behaviour of JavaScript 
//     // If Something  is not found 
//     it starts searching on layer above this  over the layer over the layer
//     until it doesn't find null

//     this and classes are working through prototype
//     When does Prototype ends



// After Object.js


let myName  = "Prashant      ";

// console.log(myName.length);  Will give  more then true lenght of name

console.log(myName.trueLength); // Undefined as trueLength is not a function


let myHeros = ["Thor ", "Spidermen"]

let heroPower = {
    thor:"hammer",
    spiderman : "sling",

    getSpiderPower: function() {
        console.log(`Spider Power is  ${this.spiderman}`);
    }
}
Object.prototype.hitesh= function(){
    console.log(`Prashant is Present in all Object`);
}
// We are using object for giving all Function, string , array  
// superpower as they all go through object 
// we are injecting in object directly



// heroPower.hitesh()

// myHeros.hitesh()  // Array Also do Object to go to null

// If  a method is injected in array of function level will this be available in Object level
Array.prototype.heyHitesh =function() {
    console.log(`Prashant Says Hello`);
}
myHeros.heyHitesh() // Array have Power
// heroPower.heyHitesh()// Will give Error as this is a function


// Inheritance

const User = {
    name:"Prahant",
    email:"Google.com"
}
const Teacher =  {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}
const TASupport= {
    makeAssignment : "JS  Assigment",
    fullTime  : true,
    __proto__ : TeachingSupport
}

//  __proto__  property for inheritance   
// we have to reference of inheritance 
// We can also do outside like Teacher.__proto__ =User
// above Approach is OutDated


// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
// First One have Access ofsecond one

let anotherUsername = "ChaiaurCOde    "

String.prototype.trueLength = function() { 
    // console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);

}

anotherUsername.trueLength()
"Prashant   ".trueLength()
"IceTea   ".trueLength()