const accountId = 1001
let emailId = "rahulbelwal123@gmail.com" 
var emailPass = "12233456"
city = "Delhi"
let accountState;   // we can also declaring variable by not assigning the value, JS treat it as UNDEFINED. 



//accountId = 1002     we cannot change const variable , it will gave an error (Assignment to consntant variable.)
console.log(accountId)

emailId = "rohan122@gmail.com"
emailPass = "1200221"
city = "Kashipur"

// In JS, we can also reserve the memory of any variable , by not declaring the type of that variable. WROST way of declaring variable.eg. city = "Kashupur"


// console.table is used to print the value in table format:
console.table([accountId, emailId, emailPass, city, accountState]);

/* 
Prefer not to use ..(var).. 
because of issue in block scope and functional scope
*/



