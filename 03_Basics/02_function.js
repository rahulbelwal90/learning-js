// investigation about scope
//  {} is known as scope
let a = 200                   // Global Scope 


if(true){
    let a = 10                // Local Scope   : here both variable `a` having different value
    const b = 20
    var c = 30
    console.log("Local a: ", a);
}

// console.log(a);   //output: a is not defined
// console.log(b);   //output: b is not defined
console.log(c);      //output: 30                      // drawback of using var keyword .....

console.log("Global a: ",a);