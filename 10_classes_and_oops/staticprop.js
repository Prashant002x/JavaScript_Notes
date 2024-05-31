class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // will not get inherited 
        // When You don't want to give access to any instance derived from this class instance
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())  // will give error

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());


//after this Bind .html