// Dates

let myDate = new Date()
console.log(myDate)

console.log(myDate.toString())  //Sun Jan 19 2025 04:59:04 GMT+0000
console.log(myDate.toDateString())  //Sun Jan 19 2025
console.log(myDate.toLocaleString())  //1/19/2025, 5:00:25 AM
console.log(typeof myDate)  // typeof myDate: Object

// let createMyDate = new Date(2024,0,22)
// let createMyDate = new Date("2023-01-24")
let createMyDate = new Date("02-22-2004")
console.log(createMyDate.toLocaleString());  //Mon Jan 22 2024 , here Jan starts from 0 index

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createMyDate.getTime());
console.log(Math.floor (Date.now()/1000) );

let newDate = new Date()
console.log(newDate.toDateString());
console.log(newDate.getDay());
console.log(newDate.getMonth());

//also can use string interpolation method
// `${newDate.getDay()} is the day`

newDate.toLocaleString('default',{
    weekday: "long"
})

// returns weekday in long format : Sunday
console.log(
    newDate.toLocaleString('default',{
        weekday: "long"
    }));







