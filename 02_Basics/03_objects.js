// Literals

const mySym = Symbol("key1")  // declaring symbol

//Object Literals
const JsUser = {
    name : "Rahul",
    "full name": "Rahul Belwal",      // can't be accessed by dot operator, use: JsUser["full name"]
    [mySym]: "myKey1",      // in object , symbol will used in square bracket , accessed using bracket
    age : 18,
    location : "Ramnagar",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLonginDays : ["Monday","Saturday"]
}
//accessing the keys value of object

// console.log(JsUser.email);
// console.log(JsUser["name"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);


// JsUser.email = "rahul@gmail.com"  // changing the value of key
// console.log(JsUser["email"]);
// // Object.freeze(JsUser)            // not able to change ant value in object using freeze
// JsUser.email= " abcd@gmail.com"

JsUser.greeting = function(){
    console.log("Hello JS User!");
}

console.log(JsUser.greeting());
console.log(JsUser.greeting); // return : function(anonymous)

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);                     //output: Hello JS User Rahul
}
console.log(JsUser.greetingTwo());       