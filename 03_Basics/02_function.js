// investigation about scope
//  {} is known as scope
let a = 200                   // Global Scope 


if(true){
    let a = 10                // Local Scope   : here both variable `a` having different value
    const b = 20
    var c = 30     // var is not used inside a scope because it leak the local data outside the scope....
    console.log("Local a: ", a);
}

// console.log(a);   //output: a is not defined
// console.log(b);   //output: b is not defined
console.log(c);      //output: 30                      // drawback of using var keyword .....

console.log("Global a: ",a);

//......................Scope level and Mini Hoisting......................

function one(){
    const username = "Rahul"
    
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    two()
    // console.log(website);          // gives an error because we are using website outside its scope
}
one()

if(true){
    const username = "Rahul"
    if(username === "Rahul"){
        const website = "Youtube"
        console.log(username + website );      // output: RahulYoutube
    }
    // console.log(website);      // gives error , using outside its scope
}
// console.log(username);     // gives error , using outside its scope


//................................INTRESTING........................................


console.log(addOne(5));           //we can call simple function before its definition

function addOne(num){             // simple traditional function
    return num+1
}

// addTwo()                     //cant call this type of function before its definition , gives an error
const addTwo = function(num){      //declaring function in a variable
    return num + 2
}
console.log(addTwo(5));         // this way of call funtion will work