// singleton

// means unique object

// when  declaring object as literal not singleton
// when using Constructor it is singleton

//Object Literals
const mySym =  Symbol("key1")
//Object.create
const JsUser = {
    name: "Prashant",
    "Full name": "Prashant Sharma",
    age: 18,
    [mySym]:"mykey1",  // for Using as Symbol   in Output Symbol key if without [] it will say string only 
    location: "delhi",
    email: "hello@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}
// by default system recgonixe name as "name"

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser["Full name"]);
// console.log(typeof JsUser.mySym); // String but is symbol
// console.log(JsUser[mySym]);
// Without Double Quotes it will error

// Can't Access Full name using .
// JsUser."Full name"  not format for this

// for changing  Value

JsUser.email = "prashantsharma@gmail.com"

// Object.freeze(JsUser)  // After this Object Values can't be ca

JsUser.email = "Hello@gmaila.com"
console.log(JsUser.email);


// Adding inside Objects

JsUser.greeting =  function(){
    console.log("Hello JS User");
}

// console.log(JsUser.greeting) // Function Returned  back
// // Only function  reference Returned back

console.log(JsUser.greeting())
