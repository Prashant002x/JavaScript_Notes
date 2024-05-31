//before properties_get_set
const User = {
    _email : "Prashant@gmail.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase();
    },  
    set email(value){
        this._email =  value;
    },
    get password(){
        return this._password.toUpperCase();  
      },
    set password(value){
        this._password = value;
    }
}

const tea = Object.create(User)
console.log(tea.email);

// email and _email are same 
// Never goes to race Situation 
// _ret   ret is private property

// Set and get see if there any property ret or _ret

// raste main overwrite kara hai