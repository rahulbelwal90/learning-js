// Array

const Arr = [0, 1, 2, 3, true, "Rahul"]
const heroes = ["Ironman", "Hulk", "CaptainAmerica"]
console.log(heroes[2])
//MDN Documentation

// array is a object, storing a collection of multiple items under a single variable name.
// JS array are resizable and can contain a mix of different datatypes.
// JS array are not associative array and so, array element cannot be accessed using arbitary string as index, must be accessed by non negative integer.
//JS array are zero-indexed.
//JS array-copy-operations create shallow copies.

// Array Methods
const myArr = [0, 1, 2, 3, 4, 5]

myArr.push(6)   //used to insert value in array
myArr.push(7)
myArr.pop()  // used to delete value from array last position

myArr.unshift(9)  // insert the value in first position by sifting all element of array
myArr.shift()     // delete the first element of array

console.log(myArr.includes(9))  // return boolean value
console.log(myArr.indexOf(3));  // return index of given value

const newArr = heroes.join()  // return array element into string format
console.log(heroes);
console.log(newArr);
console.log(typeof newArr);

// slice, splice

const orgArray = [0,1,2,3,4,5]
console.log("A" , orgArray);

//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
const myn1 = orgArray.slice(1,3)      // slice(start, end)
console.log(myn1);
console.log("B", orgArray);

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
const myn2 = orgArray.splice(1,3)      // splice(start, delete_count)
console.log(myn2);
console.log("B", orgArray);