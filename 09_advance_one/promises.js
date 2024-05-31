const promiseOne = new Promise(function(resolve , reject){
    // Do an async Task
    // DB calls , Cryptography . network 

    setTimeout(function() {
        console.log('Async Task is Complete');
        resolve()
    }, 1000)
})  // Creating Promise

// Consuming Promises

promiseOne.then(function(){
    console.log("Promise Consumed"); // This is not shown in the output
    // Without resolve()
})
 // Second way of making promises
new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log('Async Task Two')
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 Resolved");
})

// Third Promise
const promiseThree=  new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai" , email:"Chai@example.com"})
    }, 1000)
})
// Resolve can send data to then for consumption
promiseThree.then(function(user){ 
console.log(user);
})

// Promise four

const promiseFour  = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=  false
        if(!error){
            resolve(resolve({username:"Prashant" ,email:"Prashant@gmail.com"}))
        }
        else{
            reject('ERROR : Something went Wrong')
        }
    },1000)
})
// Many Number of then
promiseFour
.then((user)=>{
    console.log(user); // Error
    // can't store whole as a variable
    return user.username
}).then((username)=>{  // Chaining  user.username will come to this then
    console.log(username);
}).catch(function(error){  // Reject as error is also coming in this
    console.log(error);
}).finally(()=>{  // Default after everything is done
    console.log('Final Work is done');
})



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=  false
        if(!error){
            resolve(resolve({username:"Prashant" ,email:"Prashant@gmail.com"}))
        }
        else{
            reject('ERROR : Something went Wrong')
        }
    },1000)
})
// Not Necessary that promises are resolved or reject 
// By using .then aur .catch()
// We can also  use asyncWait or something like this 
// don't know about the spelling 
async function consumePromiseFive(){
    try{
        const response  = await promiseFive()
         console.log(reponse);
    }  
    catch(error){
        console.log(error)
    }
}

consumePromiseFive()

async function getAllUsers() {
  try{const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // Fetch was a library now a object
    console.log(response);
    // const data =await responce.json()  // It takes Times so Await
    // console.log(data);
}
catch(error){
console.log("E : ",error);
}
}
getAllUsers()
// Call takes time


fetch('')  // ALL above code will give output at the last
.then((response) => {
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
}
)


/////////////////// FETCH ///////////////
// Node JS don't have browser api
// if there is a HTML error like 404 will it found in response or resolve
// it will always be found in response not in reject

 
