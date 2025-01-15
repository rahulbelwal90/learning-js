// Conversion into number
let score = "12"

// typeof is used to determine the type of any variable
console.log(typeof score)
console.log(typeof (score))

// conversion of String into Number
let valueInNumber = Number(score) 
console.log(typeof valueInNumber)
console.log(valueInNumber)

let num = "19abc"
console.log(num)
let con = Number(num)
console.log(con);  // gives NaN as output
console.log(typeof con);  // return (number)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1; false => 0;


//conversion into BOOLEAN
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false   :empty string
// "abssdfd" => true 

//conversion into String
let someNum = 33
let stringNum = String(someNum)
console.log(typeof someNum);






