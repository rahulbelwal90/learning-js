const score = 400   // here js automatically determine the number datatype
console.log(score);

const balance = new Number(100)   // explicit way to define datatype with variable
console.log(balance);

console.log(balance.toString().length);  // convert the type of balance to string and return length

console.log(balance.toFixed(2));  // return a fixed number after decimal acc. to given value 
// output: 100.00

// .toPrecesion(value) returns a presize value according to given value
/*
Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
Must be in the range 1 - 21, inclusive.
*/

const otherNum = 112.88
console.log(otherNum.toPrecision(4)); // output: 112.9
console.log(otherNum.toPrecision(3)); // output: 113
console.log(otherNum.toPrecision(2)); //output: 1.1e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // convert a number to locale string in US Standard eg. 1,000,000
console.log(hundreds.toLocaleString('en-IN'));  // convert in INDIAN Standard eg. 10,00,000

//+++++++++++++++++++++++++++++ Math ++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-410)) // abs: absolute value , convert negative num into positive num.
console.log(Math.round(4.6)) // round: returns a roundoff value eg. output:5
console.log(Math.ceil(4.2))   // output:5
console.log(Math.floor(4.2))  // output:4
console.log(Math.min(4, 5 ,8 ,7))  // return minimum value
console.log(Math.max(4, 5 ,8 ,7))  // return maximum value

console.log(Math.random())  // return a random value range between 0-1
console.log((Math.random()*10) +1)  // to avoid 0 zero in number
console.log(Math.floor(Math.random()*10)+1); //Returns the greatest integer less than or equal to its numeric argument

const min = 10
const max = 20

// IMPORTANT SYNTAX
console.log(Math.floor(Math.random()*(max - min +1))+ min);  // random num according to range.






  


