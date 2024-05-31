function multipleBy5(num){
    this.num = num 
    return num*5
}

multipleBy5.power =2 

// . Acess Comes with Object only

console.log(multipleBy5(5));//25
console.log(multipleBy5.power);  //2 
console.log(multipleBy5.prototype);  //{}  
//

function createUser(username , score){
    this.username =  username
    this.score = score

}

createUser.prototype.increment = function() {
    //  score++
     this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price  is ${this.score}`);
    // Jis ka matlab this
}

const chai =  createUser("Chai" , 25)
const tea =  createUser("Tea" , 250)
// which value should increase score++ 
// Can use Hardcode Value tea.score ++
// We can use this.



// Not need to write Prototype manytimes 
// just use   // chai.printMe()

chai.printMe()

// will give error that can't read properites of undefined printMe

// u are transfering properties from createUser function to chai
// chai don't know that 
//  we use new keyword for this



/* new Keyword Notes

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/