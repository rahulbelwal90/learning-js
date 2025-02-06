const userEmail = []

if(userEmail ){
    console.log("User Logged In");
}else{
    console.log("User not logged In");
}

// Falsy Value :  false , 0, -0, BigInt 0n , "", null , undefined, NaN

// Truthy Value : "0", 'false', " ", [], {}, function(){}, 


// checking empty array
if(userEmail.length === 0 ){
    console.log("Array is empty");
}

// checking empty object
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//-------------------------------------------------------------------------------------------------

// Nullish Coalescing Operator (??) : null undefined

let val1
val1 = 5 ?? 10               // here val1 accept the first value:5
let val2 = null ?? 10        // but in the case of null and undefined it will accept the second value
let val3 = undefined ?? 15

console.log(val1);
console.log(val2);
console.log(val3);

//---------------------------------------------------------------------------------------------------

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80")
