// singleton object , or with the help of constructor

// const tinderUser = new Object()  // Singleton object
const tinderUser = {}    //Non singleton object

tinderUser.id = "abc123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Rahul",
            lastname: "Belwal"
        }
    }
}
console.log(regularUser.fullname);  // { userfullname: { firstname: 'Rahul', lastname: 'Belwal' } }
console.log(regularUser.fullname.userfullname.firstname);    // Rahul

//combining objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2}                       //1st method

// const obj3 = Object.assign({}, obj1,obj2)      // 2nd method

const obj3 = {...obj1, ...obj2}                   // using spread operator
console.log(obj3);


// using object inside array

const users = [
    {
        name: "rahul",
        age: 18
    },
    {
        name: "rakesh",
        age: 18
    },
    {
        name: "rohan",
        age: 18
    }
]
console.log(users[1].name);
console.log(users[2].name);

console.log(tinderUser);

console.log(Object.keys(tinderUser));       //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));     //[ 'abc123', 'Sammy', false ]
console.log(Object.entries(tinderUser));    //[ [ 'id', 'abc123' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'))   //true       


//+++++++++++++++++++++++++++++ DESTRUCTURING OBJECT +++++++++++++++++++++++++++++++++++++++++

const course = {
    courseName: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course;            // destructuring object
const {courseInstructor:instructor} = course;    // using other name of key 
// console.log(courseInstructor);
console.log(instructor);                         // calling


//json file : In json file "key" and "value" both are treated as string.
//    {
//     "coursename":"js",
//     "instructor": "hitesh",
//     "price": "999"
//    }