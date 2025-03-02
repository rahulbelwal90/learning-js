function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);  // {}  output is empty parenthesis

// in js everything is object

function createUser(usrename,score){
    this.usrename = usrename
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const chai = new createUser('chai',50)
const tea = createUser('tea',250)

chai.printMe()

/*
Here what happens behind the scene when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.This means that is has access to properties and methods defined on the construtor's prototype.

The construtor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit value is specified from the constructor, Javascript assume that it is newly created object, to be the intended return value.

The newly object is returned: After the constructor function have been called, if it does'nt return a non prototype value(object,function, array,etc.) the newly created object is returned
*/