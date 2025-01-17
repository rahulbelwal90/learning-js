const name = "Rahul Belwal"
const repoCount = 50

// console.log(name + repoCount + "value");    // old method to concatenate the string

// New method =>  Backtick ``  , String Interpolation method , in which we make placeholder for variable
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Knox_Assaulter')   // second way to declare the String variable

console.log(gameName[0])    //Obtaining the key value at 0th position
console.log(gameName.__proto__)

console.log(gameName.length);   // determine the length of the string
console.log(gameName.toUpperCase());    // convert string to upper case
console.log(gameName.charAt(2));    // return character at given index position
console.log(gameName.indexOf('x'));   // return index of given character

//slicing
const newStr = gameName.substring(0, 4)     //index from 0th to 3rd, 4th index not included
console.log(newStr);

const anotherStr = gameName.slice(-8, 14)   //slice function also use negative value, -ive starts from backword of string
console.log(anotherStr);

const newStringOne = "    Knox   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://rahul.com/rahul%100knox"
console.log(url.replace('%100', '-'));    // replace the value 
console.log(url.includes('gamer'));       // find the value in string

console.log(gameName.split('_'));   // split the string in array on behalf of given value










