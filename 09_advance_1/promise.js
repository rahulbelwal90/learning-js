//Promise :> A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// 1. creating promise using variable ________________________________________________________________

const promiseOne = new Promise(function(resolve,reject){
    // Do any async task
    // DB calls , cryptography, network

    setTimeout(function(){
        console.log("Async tast is completed");
        resolve()            //we have to connect our resolve with .then()
    },1000)
   
})

promiseOne.then(function(){          // .then() method is used for resolve 
    console.log("Promise 1 consumed");
})


// 2. creating promise without using variable__________________________________________________________

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// 3. Data Consumption , and getting value using Promise ________________________________________________

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:'chai', email:'chai@gmail.com'});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

// 4. using .then() and catch() method __________________________________________________________________

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"rahul", password:"1233321"})
        }
        else{
            reject('ERROR: Something went wrong');
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username    // returning username to forward chain
})
.then((username) =>{      // chaining of .then()
    console.log(username);
})
.catch((error) => {       // .catch()  method for catching error....
    console.log(error);
}).finally(() =>{
    console.log('Promise is either Resolved or Rejected');
})


// 5. async await method  __________________________________________________________________________

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }
        else{
            reject('ERROR: JS went wrong');
        }
    },1000)
})

// async await cannot directly handle the error , for this we have to use -> try catch block
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();          //at end , we have to execute async function....


// 6.   geting data from API   using try catch block

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()  //response.json() will take time to convert data into JSON format, so we have to use await keyword before response.json()....
        console.log(data);
    
    } catch (error) {
        console.log("E: ", error);
        
    }
}
getAllUser();


// 7. getting data from API using .then() anf .catch _________________________________________________

fetch('https://api.github.com/users/rahulbelwal90')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {console.log(error);})

//_____________________________________________________________________________________________________