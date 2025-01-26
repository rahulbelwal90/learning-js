const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)     //this keyword provide us the context value within a scope
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

/*
output:hitesh , welcome to website
{
  username: 'hitesh',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 999,
  welcomeMessage: [Function: welcomeMessage]
}*/

console.log(this);  //if we console THIS keyword outside the scope , it will give empty{} as output, because there is no context data declared globally.


// NOTE : here `this` is not working inside a simple traditional function **********
//  function chai(){
//     let username = "Rahul"
//     console.log(this);
//  }


//NOTE : here, THIS keyword also not work in function declared using variable
//  const chai= function(){
//     let username = "Rahul"
//     console.log(this.username);
//  }

//Note : here also not working THIS keyword
const chai = ()=> {
    let username = "Rahul"
    console.log(this.username);
    
}
// chai()

//.........................ARROW funciton ...........................

//Explicit return ARROW function : jisme return keyword lagana padta h
// const addTwo= (num1,num2)=>{            
//     return num1 + num2
// }

//Implicit Return Arrow function : does not need {return} statement due to one line of statement
//  const addTwo = (num1,num2) =>  num1 + num2

//agar curly braces m wrap kara to return keyword likhna hoga , agar parenthesis m wrap kara to nahi krna hoga 
//   const addTwo = (num1,num2) =>  (num1 + num2)


//Returning object with arrow function
const addTwo = (num1,num2) => ({username:"Hitesh"})
// NOTE : to return object , we need to wrap object inside curly braces eg. ({username:"Hitesh"})

console.log(addTwo(5,5));   //output:{ username: 'Hitesh' }