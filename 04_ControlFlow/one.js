// if ------------------------------------------------------------------------------------------------

// conditional operator:   < , > , <= , >= , != , == , ===
// here === also compare the datatype of value.

if(2 == "2"){
    console.log("1. executed");
}

if(2 === "2"){
    console.log("2. executed");    // datatype not matched
}

if("2" === "2"){
    console.log("3. executed");    // datatype matched
}


const temperature = 52
if(temperature < 50){
    console.log("temperature is less than 50");
}else {
    console.log("temperature is greater than 50");
}


const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power : ${power}`);
    // if we use var keyword for power , then it will accessed outside the scope.....
}
// console.log(`User Power : ${power}`);     -->   power cant accessed outside its scope because it is a const variable , if we use (var power) then it can accessed inside as well as outside of its scope , which is not useful , so we dont use var keyword mainly....

const balance = 1000
if(balance > 500)  console.log("test");
// implicit scope --> doesnt need for defining the scope, if the statement is of one line.


// Nesting ------------------------------------------------------------------------------------------

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750) {
    console.log("less than 750");
}else if(balance < 900) {
    console.log("less than 900");
}else {
    console.log("less than 1200");
}


// comparison using AND && operator  ----------------------------------------------------------------

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy course");
}


//comparison using OR || operator
const loggedInFromGoogle = true
const loggedInFromEmail = false

if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("User Logged In" );
}