//reduce method _________________________________________________________________________________________

//   const intitalValue = 0;
//   const sumWithInitital = Array.reduce(
//       (accumulator,currentValue) => accumulator + currentValue, initialValue
//   );

// Here accumulator is a empty variable , fisrt it will get value from initialValue, after (accumulator + currentValue)    accumulator will store the (sum) result value .


const myNums = [1,2,3]

const myTotal = myNums.reduce( function (acc, curVal){
    console.log(`acc value: ${acc} , curVal : ${curVal}`);
    return acc + curVal
}, 0 )

console.log(myTotal);


// using arrow function => ______________________________________________________________________________

const newTotal = myNums.reduce( (acc,curVal) => acc + curVal,  0)    
console.log(newTotal);

//_______________________________________________________________________________________________________

const shoppingCart = [
    {
        itemName: "js Course",
        price: 999 
    },
    {
        itemName: "python Course",
        price: 2999
    },
    {
        itemName: "Mobile Development",
        price: 12999
    }
]

//adding the price of cart............by using reduce function...

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0)
console.log(priceToPay);

//_______________________________________________________________________________________________________