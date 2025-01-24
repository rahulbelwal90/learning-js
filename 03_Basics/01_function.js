function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("H");
    console.log("U");
    console.log("L");
}

sayMyName   // this is function reference
// sayMyName() // function execution

// function addTwoNum(number1,number2) {              // function with parameter
//     console.log(number1+number2);
// }

// addTwoNum(2,2);                 // function with passing arguments: actual value

function addTwoNum(number1,number2){
    // let result = number1+number2;
    // return result                       // function with return
    
    return number1+number2
    console.log("rahul");        // function will not perform any operation after return statement!!     
}
const result = addTwoNum(5,4)
console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rahul"));
console.log(loginUserMessage());      //output:sam just logged in
console.log(loginUserMessage("Rahul"));  //output:Rahul just logged in :new value is override on previous