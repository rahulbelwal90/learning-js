// map() funciton________________________________________________________________________________________

// NOTE: map() and filter() automatically returned their value , but if you are using scope for condtion ,then you will have to use return statement ...................

const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNumbers.map( (num) => num+10 )
console.log(newNum);


// Chaining_____________________________________________________________________________________________
//=>        chaining is a method in which you can use two or more method directly like filter() or map()

const newNum2 = myNumbers
                .map( (num) => num*10)
                .map( (num) => num+1)
                .filter( (num) => num >= 40)

console.log(newNum2);