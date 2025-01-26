// Immediately Invoked Function Expression (IIFE)

// IIFE is used for prevent a function from the pollution from global scope variables or declation.
// first parenthesis () is function definition and second parenthesis () is function exeution


(function chai(){
    //named IIFE
    console.log("DB Connected");
}) ();

// this is a immediate invoked function and doesnt know where to stop the context of function , so we always have to terminate the function using semicolon ;  at the end .   eg.  (fun def)();

(()=>{
    console.log("DB CONNECTED TWO");
})();

// NOTE : we can also use the arrow function using IIFE

// using IIFE with passing parameter

((name)=>{
    console.log(`Database Connected : ${name}`);
})  ("Rahul");  
// output: Database Connected : Rahul