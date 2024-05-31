//  See the Pic  first 
    // who tells where this is pointing to  callme is inside function but it is not 
    //  not pointing to the function 
    // we user global execution context for this 
    // if envirnment is Window it gives window object by this 
    // but if environment is  node it will give empty object 


function SetUsername(username) {
    // Complex DB Calls
    this.username = username
    console.log("Called");
}

function createUser(username, email , password) {
    SetUsername(username )// This is being called but not be used 
    //  after being called it finished its execution and 
    //  get removed from the stack along with variable declared inside it 


    SetUsername.call(this, username)//  This is the Solution  
     // We also have  to send the reference in this for holding 
     // Variable
     // When we are using call we can use this as a optional variable

    this.email  = email
    this.password = password
}

const chai = new createUser("Prashant ","Hero@fb.com","123")
console.log(chai);
// username is not being set  only email and password is being set


 