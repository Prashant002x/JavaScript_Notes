class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
     // getter and setter are by defult present in class
    get password(){
        return this.password.toUpperCase()
        //return this._password.toUpperCase()
    }
    // Have to define both 
    // only one will give error
    set password(value){
        this.password = value
        this._password  = value;
        // Above can resolve the Error

    }
    // Error Race Between Setter anc Constructor
    // Both Set and Contructor can't set values at the same time
    get email(){
        return this._email.toUpperCase();
    }
    set  email(value){
        this._email = value;
    }
     //just change vairable name using _ in front of it
    //_email is private Property and different property then email

}

const hitesh = new User("P@gmail.com" ,"123")
console.log(hitesh.email);

// After this Function of getter and setters