// Datatype Summary

// 1 Primitive Datatype : These are the basic type and are immutable(their value cannot be changed once created)
// (7 types)

// NUMBER = represent both integer and floating point number
let score = 22
let pi = 3.14

// STRING = Represent sequence of character
const str = "Rahul Belwal"

// BOOLEAN = Represent logical value, either TRUE or FALSE
const isLoggedIn = true

// NULL = Represent the intentional absence of any value or object.
const outsideTemp = null

// UNDEFINED = A variable that has been declared but not assigned the value.
let userEmail;

// Symbol = Represent a unique and immutable value often used as object key.
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

//BigInt = represent a large integer beyond the number range
let bigNum = 125200000152511100n


// Non Premitive Datatype (Reference Type)
// => include collections or objects. They store references to their values rather than the actual value itself.

// Object = Represent a collection of key value pair
let myObj = {
    namE:"Rakesh",
    age:22
}

// Array = A special type of object used for storing ordered collections of data.
const heroes = ["shaktimaan", "IronMan", "Hulk"];

// Function = A block of reusable code that can be executed
let myFunction = function(){
    console.log("Hello World");
}

// typeof => this operator is used to determine the return type of operand
console.log(typeof pi);                    // number
console.log(typeof str);                   // string
console.log(typeof isLoggedIn);            // boolean
console.log(typeof outsideTemp);           // null => object
console.log(typeof userEmail);             // undefined
console.log(typeof id);                    // symbol
console.log(typeof bigNum);                // bigint

console.log(typeof myObj);                 // object
console.log(typeof heroes);                // object
console.log(typeof myFunction);            // function

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// STACK and HEAP
//Primitive datatype => Call by value => stack memory
//NonPrimitive Datatype => Call by reference => heap memory
// JS is a dynamically typed language, means you dont need to specify the datatype of variable when you declare it.

let youTubeChannel = "HiteshSir"
let anotherName = youTubeChannel
anotherName = "ChaiOrCode"
console.log(youTubeChannel);
console.log(anotherName);                // stack memory eg.


let userOne = {
    email: "abc@gmail.com",
    upi: "abc@sbi"
}
let userTwo = userOne
userTwo.email = "Rahul@gmail.com"
console.log(userOne);
console.log(userTwo);                   // heap memory eg.